<template lang="html">
  <div class="product-info">
    <div v-if="!name" class="loading-animation">
      <GLoadingAnimation />
    </div>
    <div v-else>
      <div class="icon">
        <FoodIcon></FoodIcon>
      </div>
      <div class="brand">
        <GTextHeader centered>
          <slot slot="title">{{ name }}</slot>
        </GTextHeader>
      </div>
      <div class="company-description">
        {{ description }}
      </div>
      <div class="info-box">
        <InfoBox
        :brand="brand"
        :category="category"
        :code="code"
        />
        <GButton class="back-button" @click="goBack">
          <slot slot="title">Scan again</slot>
        </GButton>
      </div>
    </div>
  </div>
</template>

<script>
import GButton from '../ui/GButton'
import FoodIcon from '../../assets/feedback/FoodIcon'
import GTextHeader from '../ui/GTextHeader'
import InfoBox from './InfoBox'
import GLoadingAnimation from '../ui/GLoadingAnimation'

export default {
  name: 'ProductInfo',
  components: {
    GButton,
    FoodIcon,
    GTextHeader,
    InfoBox,
    GLoadingAnimation,
  },
  data() {
    return {
      description: '',
      name: '',
      brand: '',
      category: '',
      code: '',
    }
  },
  mounted() {
    this.getProductData()
  },
  methods: {
    getProductData() {
      this.name = 'test-name'
      this.brand = 'test-brand'
      this.category = 'test-category'
      this.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
      this.code = this.$route.params.code
    },
    goBack() {
      this.$router.push({
        name: 'scanner',
        params: { firstVisit: false },
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.product-info {
  .loading-animation {
    position: fixed;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -0%);
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .company-description {
    margin: 1.5rem 1rem;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
  }
  .info-box {
    position: fixed;
    bottom: 5rem;

    .back-button {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
