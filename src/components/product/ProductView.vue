<template lang="html">
  <div class="product-view">
    <GLoadingAnimation
      v-if="isLoadingScreenActive"
      class="loading-animation"
    />

    <LoadingView
      v-else-if="isDataRequestScreenActive"
      @updateFeedbackView="updateFeedbackView"
      @onClickBackButton="$router.push({name: 'scanner'})"
    />

    <FeedbackView
      v-else
      :feedback="feedback"
      :productCorporation="product.corporation"
      @onClickInfoButton="isProductInfoActive = true"
      @onClickBackButton="isProductInputActive = true"
    />

    <transition name="slide-up">
      <InfoSlideUp
        v-if="isProductInfoActive"
        :productName="product.name"
        :productBrand="product.brand"
        @closeInfoModal="isProductInfoActive = false"
      />
    </transition>

    <transition name="slide-left">
      <ProductInput
        v-if="isProductInputActive"
        :name="product.name"
        :brand="product.brand"
        :code="barcode"
        @closeProductInput="isProductInputActive = false"
      />
    </transition>
  </div>
</template>

<script>
import GLoadingAnimation from '@/components/ui/GLoadingAnimation.vue'
import InfoSlideUp from './info/InfoSlideUp.vue'
import LoadingView from './LoadingView.vue'
import ProductInput from './input/ProductInput.vue'
import FeedbackView from './FeedbackView.vue'
import FeedbackService from '@/FeedbackService'

export default {
  name: 'ProductView',
  components: {
    GLoadingAnimation,
    InfoSlideUp,
    LoadingView,
    ProductInput,
    FeedbackView,
  },
  data() {
    return {
      barcode: '',
      feedback: '',
      isDataRequestScreenActive: false,
      isLoadingScreenActive: true,
      isProductInfoActive: false,
      isProductInputActive: false,
      product: {
        brand: '',
        corporation: '',
        name: '',
      }
    }
  },
  watch:{
    $route (){
      location.reload()
    }
  },
  created() {
    this.barcode = this.$store.state.barcode
    if (this.barcode !== this.$route.params.code) {
      this.barcode = this.$route.params.code
    }
    const barcodeLength = this.barcode.length
    const isBarcodeNotNumber = isNaN(this.barcode)
    if (isBarcodeNotNumber || (barcodeLength !== 13 && barcodeLength !== 8)) {
      this.$router.push({
        name: 'scanner',
        params: { usersFirstVisit: false },
      })
    } else {
      this.getAPIResponse()
    }
  },
  methods: {
    getAPIResponse() {
      FeedbackService.getFeedback({ barcode: this.barcode })
      .then(resp => (
        this.updateFeedbackView(resp)
      ))
    },
    updateFeedbackView(response) {
      console.log(response) ? process.env.NODE_ENV === 'develop' : ''
      // 209 - not in database, crawler starts
      // 210 - data is incomplete
      // 211 - data is entered but unchecked
      // 200 - data is here and returned

      const httpStatus = response.status
      const is_big_ten = response.data.is_big_ten

      if (httpStatus === 209) {
        this.isLoadingScreenActive = false
        this.isDataRequestScreenActive = true
      } else {
        if (is_big_ten === true) {
          this.feedback = 'bad'
          this.updateProductData(response)
        } else if (is_big_ten === false) {
          this.feedback = 'good'
          this.updateProductData(response)
        } else if (httpStatus === 211) {
          this.feedback = 'unchecked'
        }
        this.disableLoadingScreens()
      }
    },
    updateProductData(response) {
      this.product.name = response.data.fields.name
      this.product.brand = response.data.fields.brand
      this.product.corporation = response.data.fields.corporation
    },
    disableLoadingScreens() {
      this.isLoadingScreenActive = false
      this.isDataRequestScreenActive = false
    },
  }
}
</script>

<style lang="scss" scoped>
.product-view {
  width: 100%;
  height: 100%;

  .loading-animation {
    position: fixed;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
  }

  .slide-up-enter {
    transform: translateY(800px);
  }
  .slide-up-enter-to {
    transform: translateY(0px);
  }
  .slide-up-enter-active {
    transition: all .3s linear;
  }
  .slide-up-leave {
    transform: translateY(0px);
  }
  .slide-up-leave-to {
    transform: translateY(800px);
  }
  .slide-up-leave-active {
    transition: all .3s linear;
  }

  .slide-left-enter {
    transform: translateX(500px);
  }
  .slide-left-enter-to {
    transform: translateX(0px);
  }
  .slide-left-enter-active {
    transition: all .3s linear;
  }
  .slide-left-leave {
    transform: translateX(0px);
  }
  .slide-left-leave-to {
    transform: translateX(500px);
  }
  .slide-left-leave-active {
    transition: all .3s linear;
  }
}
</style>
