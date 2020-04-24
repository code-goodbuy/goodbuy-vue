<template>
<div class="table-view">
  <HeaderBar></HeaderBar>
  <div class="table-view__body">
    <template v-for="(data, index) in response_data">
      <button 
        @click="onClickSetInfoActiveTrue(data)"
        :key="index" class="row"
      >
        {{ data.fields.name }}
        <div class="is-big-ten">
          <div v-if="data.is_blacklist === true">
            ⬛️
          </div>
          <div v-else-if="data.is_big_ten === true">
            ❌
          </div>
          <div v-else-if="data.is_big_ten === false">
            ✅
          </div>
          <div v-else-if="data.is_big_ten === 'We don\'t know'">
            ❓
          </div>
        </div>
      </button>
      <hr :key="index+data.fields.name">
    </template>
  </div>

  <transition name="slide-up">
    <InfoSlideUp v-if="isProductInfoActive" :showScanAgainButton="false" :productName="product.name" :productBrand="product.brand" :productCorporation="product.corporation" :productIsBigTen="product.is_big_ten" :barcode="this.barcode"
      @closeInfoModal="isProductInfoActive = false" />
  </transition>

    <div class="table-view__footer">
			<p class="p-score">Score: {{ score }}/100</p>
			<button
				class="done-button"
				@click="onClickRouteToFeature"
			>
			Done
			</button>
    </div>
</div>
</template>

<script>
import FeedbackService from '@/FeedbackService'
import InfoSlideUp from '@/components/product/info/InfoSlideUp.vue'
import HeaderBar from '@/components/ui/GHeaderBar.vue'

export default {
  components: {
    InfoSlideUp,
    HeaderBar
  },
  data() {
    return {
      response_data: '',
      score: 0,
      bad_karma: 0,
      good_karma: 0,
      we_dont_know: 0,
      isProductInfoActive: false,
      product: {
        brand: '',
        corporation: '',
        name: '',
        code: '',
        is_big_ten: '',
        is_blacklist: '',
      },
      barcode: '',
    }
  },
  methods: {
    onClickSetInfoActiveTrue(data){
      this.isProductInfoActive = true
      this.product = data.fields
      this.product.is_big_ten = data.is_big_ten
      this.product.is_blacklist = data.is_blacklist
    },
    calculateScore() {
      this.response_data.forEach(element => {
        if (element.is_big_ten === true || element.is_blacklist === true) {
          this.bad_karma += 1
        } else if (element.is_big_ten === false || element.is_blacklist === false && element.is_big_ten !== 'We don\'t know') {
          this.good_karma += 1
        } else {
          this.we_dont_know += 1
        }
      })
      let amount_of_products = this.response_data.length
      // <!-- Good Item / Total Item * 100 = Score -->
      this.score = Math.round((this.good_karma / (amount_of_products - this.we_dont_know)) * 100)
    },
    getAPIResponse() {
      FeedbackService.getFridgeKarmaResult()
        .then(response => (
          this.saveData(response)
        ))
    },
    onClickRouteToFeature() {
      this.$router.push("/feature")
    },
    saveData(response) {
      this.response_data = response.data
      this.calculateScore()
    },
  },
  created() {
    this.barcodes = this.$store.state.multipleBarcodes
    this.getAPIResponse()
  }
}
</script>

<style lang="scss" scoped>
hr,
p {
    margin: 0;
}

.table-view {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    &__body {
        table-layout: fixed;
        flex: 5;
        overflow-y: auto;

        .row {
            display: flex;
            justify-content: space-around;
            font-size: 8vw;
            width: 100%;
        }
    }

	&__footer {
		display: flex;
		background-color: #272727;
		justify-content: space-around;
		align-items: center;
		flex: 1;
		color: white;

		button.done-button {
			color: white;
			font-size: 8vw;
			background-color: #272727;
			border-radius: 16px;
			margin-right: 20px;
			padding: 0.5rem;
		}
		p.p-score {
			font-size: 8vw;
		}
	}
}
</style>
