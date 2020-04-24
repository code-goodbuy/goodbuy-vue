<template>
  <div class="tutorial-component">
    <HeaderBar></HeaderBar>
    <div class="title">Welcome to the BLACKLIST</div>
    <br>
    <div class="sub-title">Introduction</div>
    <br>
    <input type="text" placeholder="e.g sustainable list" v-if="tutorial===3">
    <hr>
    <br>
    <div class="info">
      <div>{{ content[tutorial] }}</div>
    </div>
    <br>
    <button @click="onClickNext()" class="btn-next">next</button>
  </div>
</template>

<script>
import HeaderBar from '@/components/ui/GHeaderBar.vue'
import FeedbackService from '@/FeedbackService.js'

export default {
  name: 'blacklist-tutorial',
  components: {
    HeaderBar
  },
  data: function (){
    return {
      tutorial: 0,
      content: [
        `Hello ${this.$auth.user.nickname}, this feature helps you sort out product that do not fit your habits. To get the product you like.`,
        'Simply select brands you do not like. We will then flag product that contain elements from your blacklist.',
        'Let\'s create your blacklist together in a short tutorial!',
        'Type in a name for your blacklist.'
      ]
    }
  },
  methods: {
    onClickNext() {
      if(this.tutorial < 3) {
        this.tutorial += 1
      }
      else{
        let jwt = ''
        this.$auth.getTokenSilently()
        .then(resp => (
          jwt = resp,
          this.createEmptyBlacklist(jwt)
        ))
        .catch(error => {
          console.log(error.response)
        })
        this.$router.push('blacklist')
      }
    },
    createEmptyBlacklist(jwt) {
      FeedbackService.postBlacklist({ 'user_id':this.$auth.user.sub, 'blacklist':'', 'jwt': jwt })
      .then(resp => (
        console.log(resp) ? process.env.NODE_ENV === 'develop' : ''
      ))
      .catch(error => {
        console.log(error.response)
      })
    }
  },
  destroyed: function(){
    this.tutorial = 0
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
    text-align: center;
}
.sub-title {
    font-size: 1.1rem;
}
.info {
  margin-left: 1rem;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 0.8rem;
  color: #272727;
}
.btn-next {
  outline: none;
  border: 0;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  font-family: 'Work Sans', sans-serif;;
  font-size: 20px;
  font-weight: 500;
  padding: .5rem 1rem;
  border-radius: 28px;
  color: #272727;
  background-color: #90D2D9;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.353);
  margin-top: 5rem;
  margin-left: 16rem;
}

</style>
