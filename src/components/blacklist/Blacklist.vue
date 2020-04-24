<template>
  <div class="container">
    <div class="header">
      <HeaderBar></HeaderBar>
    </div>
    <button @click="onClickgoBack">
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
            <input type="checkbox" v-model="corporation.is_checked">  {{ corporation.name }}
          </div>
        </ul>
        <button @click="onClickSaveBlacklist">Save</button>
      </div>
    </div>
  </div>
</template>
<script>

import HeaderBar from '@/components/ui/GHeaderBar.vue'
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
      corporations: [
      {name: 'Nestlé', is_checked: false}, 
      {name: 'Coca-Cola', is_checked: false},
      {name: 'Mars', is_checked: false},
      {name: 'Unilever', is_checked: false},
      {name: 'PepsiCo', is_checked: false},
      {name: 'Mondelez', is_checked: false},
      {name: 'Kellog\'s', is_checked: false},
      {name: 'General Mills Inc.', is_checked: false},
      {name: 'Danone', is_checked: false},
      {name: 'Associated British Foods plc', is_checked: false},
      ],
      newBrand: ''
    }
  },
  methods: {
    onClickgoBack: function() {
      this.$router.push('feature')
    },
    onClickSaveBlacklist: function() {
    let jwt = ''
    this.$auth.getTokenSilently()
    .then(resp => {
      jwt = resp
      let updatedBlacklist = []
      this.corporations.forEach(corp => {
      if (corp.is_checked) {
        updatedBlacklist.push(corp.name)
      }
      })
      this.$store.commit('updateBlacklist', updatedBlacklist)
      this.sendBlacklist(jwt, updatedBlacklist)
    })
    .catch(error => {
      console.log(error)
    })
    },
    sendBlacklist: function(jwt, updatedBlacklist) {
    FeedbackService.putBlacklist({'blacklist': updatedBlacklist, 'jwt': jwt, 'user_id': this.$auth.user.sub})
    .then(resp => (
    console.log('successfull', resp) ? process.env.NODE_ENV === 'develop' : ''
      ))
    .catch(error => {
      console.log(error.response)
    })
    },
    initialBlacklist() {
      this.checkedCorporation = this.$store.state.blacklist
      if (this.checkedCorporation.length === 0) {
        return
      }
      else {
        this.corporations.forEach ( corp => {
          if (this.checkedCorporation.includes(corp.name)) {
            corp.is_checked = true
          }
        })
      }
    }
  },
  created() {
  this.initialBlacklist()
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
