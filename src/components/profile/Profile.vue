<template>
  <div>
    <HeaderBar></HeaderBar>
    <div>
      <img :src="$auth.user.picture">
      <h2>{{ $auth.user.name }}</h2>
      <p>{{ $auth.user.email }}</p>
    </div>

    <div>
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div>
    <div class="blacklist-btn" @click="onClickOpenBlacklist">Open Blacklist</div>
  </div>
</template>

<script type="text/javascript">
import HeaderBar from '@/components/ui/GHeaderBar.vue'
import FeedbackService from '@/FeedbackService.js'

export default {
  components: {
    HeaderBar
  },
  methods: {
    onClickOpenBlacklist() {
      let jwt = ''
      this.$auth.getTokenSilently()
      .then(resp => (
        jwt = resp,
        this.requestBlacklist(jwt)
      ))
      .catch(error => {
        console.log(error.response)
      })
    },
    requestBlacklist(jwt) {
      FeedbackService.getBlacklist({ 'user_id': this.$auth.user.sub,'jwt': jwt })
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
    }
  },
}
</script>
