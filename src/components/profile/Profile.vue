<template>
  <div>
    <HeaderBar></HeaderBar>
    <GTitle>
    <slot slot="title">
      Profile
    </slot>
  </GTitle>
    <div class="profil-btn-grid">
      <div class="karma-score-btn grid">
        <div class="text">Score: 90/100</div>
      </div>
      <div class="scanned-products-btn grid">Scanned Products: 900</div>
      <div class="scan-history-btn grid">Scan History</div>
      <div class="blacklist-btn grid" @click="onClickOpenBlacklist">Blacklist</div>
    </div>
  </div>
</template>

<script type="text/javascript">
import HeaderBar from '@/components/ui/GHeaderBar.vue'
import FeedbackService from '@/FeedbackService.js'
import GTitle from '@/components/ui/GTitle'

export default {
  components: {
    HeaderBar,
    GTitle
  },
  methods: {
    onClickOpenBlacklist() {
      FeedbackService.getBlacklist({ 'user_id': this.$auth.user.sub })
      .then(resp => (
        this.$store.commit('updateBlacklist', resp.data.blacklist.split(',')),
        this.$router.push('blacklist')
      ))
      .catch(error => {
        if (error.response.status === 404) {
          this.$router.push("blacklist-tutorial")
        } else {
          console.log(error.response)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.profil-btn-grid {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  .grid {
    display: flex;
    justify-content: center;
    height: 150px;
    width: 150px;
    background-color:#90D2D8;
    margin: 10px;
    flex-grow: 4;
    align-items: center;
    color: white;

    .text {
      text-align: center;
    }
  }
}
</style>
