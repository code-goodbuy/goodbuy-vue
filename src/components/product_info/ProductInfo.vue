<template lang="html">
  <div class="product-info">
    <div class="icon">
      <FoodIcon></FoodIcon>
    </div>
    <div class="brand">
      <GTextHeader centered>
        <slot slot="title">Product Name</slot>
      </GTextHeader>
    </div>
    <div class="info-box">

    </div>
    <GButton class="back-button" @click="goBack">
      <slot slot="title">Scan again</slot>
    </GButton>
  </div>
</template>

<script>
import GButton from '../ui/GButton'
import FoodIcon from '../../assets/feedback/FoodIcon'
import GTextHeader from '../ui/GTextHeader'

export default {
  name: 'ProductInfo',
  components: {
    GButton,
    FoodIcon,
    GTextHeader,
  },
  methods: {
    goBack() {
      this.$router.push('/scanner')
    }
  },
}
</script>

<style lang="scss" scoped>
.product-info {
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
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
