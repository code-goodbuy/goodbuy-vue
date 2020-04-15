<template>
	<div class="container">
			<div class="header">
					<HeaderBar></HeaderBar>
			</div>
			<button @click="goBack">
					<BackArrowIcon></BackArrowIcon>
			</button>
			<div class="body">
					<div class="title">Blacklist</div>
					<br>
					<div class="header">Selection</div>
					<hr>
					<div class="header-info">Please select the items you don't like from the product categories e.g. if you have allergies select them in the product category: Allergies.</div>
					<hr>
					<div class="filter-body">
							<div class="sub-title">Corporations</div>
							<hr>
							<ul>
									<div v-for="(corporation, index) in corporations" :key="index">
												<input type="checkbox" :value="corporation" :id="corporation" @click="updateBlacklist(corporation)">  {{ corporation }}
									</div>
							</ul>
							<button @click="onClickSaveBlacklist">Save</button>
					</div>
			</div>
	</div>
</template>
<script>

import HeaderBar from '@/components/intro/IntroViewHeaderBar'
import BackArrowIcon from '@/assets/common/BackArrowIcon.vue'
import FeedbackService from '@/FeedbackService.js'

export default {
	components: {
			HeaderBar,
			BackArrowIcon
	},
	data: function () {
			return {
					checkedCorporation: [],
					corporations: ['Nestlé', 'Unilever', 'Mars', 'Coca-Cola', 'Danone', 'PepsiCo', 'Kelloggs', 'Placeholder', 'Placeholder', 'Placeholder',],
					newBrand: ''
			}
	},
	methods: {
			updateBlacklist: function(corporation) {
					if(this.checkedCorporation.includes(corporation)){
							var index = this.checkedCorporation.indexOf(corporation)
							this.checkedCorporation.splice(index, 1)
					}
					else{
							this.checkedCorporation.push(corporation)
					}
					this.$store.commit('updateBlacklist', this.checkedCorporation)
			},
			goBack: function() {
					this.$router.push('feature')
			},
			onClickSaveBlacklist: function() {
				FeedbackService.putBlacklist(this.$store.state.blacklist)
				.then(resp => (
          console.log('successfull', resp)
					))
				.catch(error => {
					console.log(error.response)
			})
			},
			initialBlacklist: function(resp) {
				this.checkedCorporation = resp.data.blacklist.split(',')
				for (var i = 0; i < this.checkedCorporation.length; i++){
					document.getElementById(this.checkedCorporation[i]).checked = true
				}
				this.$store.commit('updateBlacklist', this.checkedCorporation)
			}
	},
	created() {
			FeedbackService.getBlacklist()
			.then(resp => (
				this.initialBlacklist(resp)
			))
			.catch(error => {
				console.log(error.response)
			})
	}
}
</script>

<style scoped>
.title {
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  color: #272727;
}

.body {
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #272727;
  padding-left: 10%;
  padding-right: 5%;
}

.header {
  font-size: 1.5rem;
}

.sub-title {
  font-size: 1.1rem;
}

.header-info {
  font-size: 0.9rem;
}
</style>
