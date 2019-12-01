<template lang="html">
  <div class="product-view">
    <GLoadingAnimation
      v-if="isLoadingScreenActive"
      class="loading-animation"
    />

    <LoadingView
      v-else-if="isDataRequestScreenActive"
      @updateView="updateView"
      @onClickBackButton="$router.push({name: 'scanner'})"
    />

    <FeedbackView
      v-else
      :feedback="feedback"
      :productCorporation="productCorporation"
      @onClickInfoButton="isProductInfoActive = true"
      @onClickBackButton="isProductInputActive = true"
    />

    <transition name="slide-up">
      <InfoSlideUp
        v-if="isProductInfoActive"
        :productName="productName"
        :productBrand="productBrand"
        @closeInfoModal="isProductInfoActive = false"
      />
    </transition>

    <transition name="slide-left">
      <ProductInput
        v-if="isProductInputActive"
        :name="productName"
        :brand="productBrand"
        :code="barcode"
        @closeProductInput="isProductInputActive = false"
      />
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
import GLoadingAnimation from '@/components/ui/GLoadingAnimation.vue'
import InfoSlideUp from './info/InfoSlideUp.vue'
import LoadingView from './LoadingView.vue'
import ProductInput from './input/ProductInput.vue'
import ProductViewFeedbackView from './ProductViewFeedbackView.vue'

export default {
  name: 'ProductView',
  components: {
    GLoadingAnimation,
    InfoSlideUp,
    LoadingView,
    ProductInput,
    'FeedbackView': ProductViewFeedbackView,
  },
  data() {
    return {
      barcode: '',
      feedbackMessage: '',
      feedbackTitle: '',
      feedback: '',
      isDataRequestScreenActive: false,
      isLoadingScreenActive: true,
      isProductInfoActive: false,
      isProductInputActive: false,
      productBrand: '',
      productCorporation: '',
      productName: '',
    }
  },
  watch:{
    $route (){
      location.reload()
    }
  },
  created() {
    this.barcode = this.$route.params.code
    const barcodeLength = this.barcode.length
    const isBarcodeNotNumber = isNaN(this.barcode)
    if (isBarcodeNotNumber || (barcodeLength !== 13 && barcodeLength !== 8)) {
      this.$router.push({
        name: 'scanner',
        params: { usersFirstVisit: false },
      })
    } else {
      this.isBigTen()
    }
  },
  methods: {
    isBigTen() {
      axios
      .get(`${process.env.VUE_APP_FEEDBACK_API_URL}${this.barcode}/`)
      .then(resp => (
        this.updateView(resp)
      ))
    },
    updateView(response) {
      console.log(response) ? process.env.NODE_ENV === 'develop' : ''
      // 209 - not in database, crawler starts
      // 210 - data is incomplete
      // 211 - data is entered but unchecked
      // 200 - data is here and returned
      if (response.status === 209) {
        this.isLoadingScreenActive = false
        this.isDataRequestScreenActive = true
      } else {
        if (response.data.is_big_ten === "True") {
          this.feedback = 'bad'
          this.updateProductInfo(response)
        } else if (response.data.is_big_ten === "False") {
          this.feedback = 'good'
          this.updateProductInfo(response)
        } else if (response.status === 211) {
          this.feedback = 'unchecked'
        }

        this.isLoadingScreenActive = false
        this.isDataRequestScreenActive = false
      }
    },
    updateProductInfo(response) {
      this.productName = response.data.fields.name
      this.productBrand = response.data.fields.brand
      this.productCorporation = response.data.fields.corporation
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
