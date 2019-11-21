<template lang="html">
  <div class="product-info">
    <div v-if="!name" class="loading-animation">
      <GLoadingAnimation />
    </div>

    <div v-else>
      <div class="close-button" @click="$emit('closeInfoModal')" >
        <CloseIcon />
      </div>

      <div class="food-icon">
        <FoodIcon />
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
        <InfoSlideUpInfoBox
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
import CloseIcon from '@/assets/common/CloseIcon.vue'
import FoodIcon from '@/assets/product/FoodIcon.vue'
import GButton from '@/components/ui/GButton.vue'
import GLoadingAnimation from '@/components/ui/GLoadingAnimation.vue'
import GTextHeader from '@/components/ui/GTextHeader.vue'
import InfoSlideUpInfoBox from './InfoSlideUpInfoBox.vue'

export default {
  name: 'InfoSlideUp',
  components: {
    CloseIcon,
    FoodIcon,
    GButton,
    GLoadingAnimation,
    GTextHeader,
    InfoSlideUpInfoBox,
  },
  data() {
    return {
      brand: '',
      category: '',
      code: '',
      description: '',
      name: '',
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
  background-color: white;

  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .close-button {
    margin: .5rem;
    position: absolute;
  }
  .loading-animation {
    position: fixed;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -0%);
  }
  .food-icon {
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
