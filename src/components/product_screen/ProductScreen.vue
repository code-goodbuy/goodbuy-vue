<template lang="html">
  <div class="product-screen">
    <div class="icon">
      <PosFeedbackIcon></PosFeedbackIcon>
    </div>
    <div class="content">
      <GTextHeader centered big>
        <slot slot="title">Yah!</slot>
        <slot slot="content">The product that you scanned is not from one of the 10 big concerns.</slot>
      </GTextHeader>
      <InfoButton @click="showInfo">
        <slot slot="title">I want to know more</slot>
      </InfoButton>
    </div>
    <div class="back-button">
      <GButton @click="goBack">
        <slot slot="title">Scan Again</slot>
      </GButton>
    </div>
  </div>
</template>

<script>
import GButton from '../ui/GButton'
import PosFeedbackIcon from '../../assets/feedback/PosFeebackIcon'
import GTextHeader from '../ui/GTextHeader'
import InfoButton from './InfoButton'

export default {
  name: 'ProductScreen',
  components: {
    GButton,
    PosFeedbackIcon,
    GTextHeader,
    InfoButton,
  },
  methods: {
    goBack() {
      this.$router.push('/scanner')
    },
    showInfo() {
      this.$router.push({ name: 'product-info', params: {code: this.$route.params.code}})
    }
  }
}
</script>

<style lang="scss" scoped>
.product-screen {
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    button {
      margin: 1rem auto;
      display: block;
    }
  }
  .back-button {
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);
    margin: 0 auto;
  }
}
</style>
