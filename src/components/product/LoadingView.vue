<template lang="html">
  <div class="loading-view">
    <div @click="$emit('onClickBackButton')">
      <BackArrowIcon class="back-button"/>
    </div>

    <div class="center">
      <GLoadingAnimation class="loading-animation"/>
      <div class="info-text">
        Hi, we currently don’t have your product in our database. We are adding it right now. This may take a bit. Thank you for your patience.
      </div>
      <RefreshButton @click="onClickRefreshButton">
        <slot slot="title">Refresh</slot>
      </RefreshButton>
    </div>
  </div>
</template>

<script>
import BackArrowIcon from '@/assets/common/BackArrowIcon.vue'
import GLoadingAnimation from '@/components/ui/GLoadingAnimation.vue'
import FeedbackViewInfoButton from './FeedbackViewInfoButton.vue'
import FeedbackService from '@/FeedbackService'

export default {
  name: 'LoadingView',
  components: {
    BackArrowIcon,
    GLoadingAnimation,
    'RefreshButton': FeedbackViewInfoButton,
  },
  methods: {
    onClickRefreshButton() {
      const barcode = this.$route.params.code
      FeedbackService.getFeedbackResult({ barcode: barcode })
      .then(resp => (
        this.checkResultbigten(resp)
      ))
    },
    checkResultbigten(response) {
      // TODO - change "True" to a true boolean front and backend
      if (response.data.is_big_ten === "True" || response.data.is_big_ten === "False") {
        this.$emit('update-view', response)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.loading-view{
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .back-button {
    margin-left: .5rem;
  }
  .center {
    align-self: center;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .loading-animation {
    }
    .info-text {
      margin: 1rem 2rem;
      margin-top: 2rem;

      text-align: center;
      font-family: "Open Sans", sans-serif;
      font-size: 5vw;
      line-height: 20px;
    }
  }
}
</style>
