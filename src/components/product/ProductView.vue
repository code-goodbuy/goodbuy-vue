<template lang="html">
  <div class="product-view">
    <GLoadingAnimation
      v-if="isLoadingScreenActive"
      class="loading-animation"
    />

    <LoadingView
      v-else-if="isDataRequestScreenActive"
      @update-view="updateFeedbackView"
      @onClickBackButton="$router.push({name: 'instant-feedback'})"
    />

    <FeedbackView
      v-else
      :feedback="feedback"
      :productCorporation="product.corporation"
      @onClickInfoButton="isProductInfoActive = true"
      @onClickAddInfoButton="onClickAddInfoButton()"
    />

    <transition name="slide-up">
      <InfoSlideUp
        v-if="isProductInfoActive"
        :productName="product.name"
        :productBrand="product.brand"
        :barcode="this.barcode"
        @closeInfoModal="isProductInfoActive = false"
      />
    </transition>

    <transition name="slide-left">
      <ProductInput
        v-if="isProductInputActive"
        :name="product.name"
        :brand="product.brand"
        :code="barcode"
        :category="getCategory"
        :categories="categories"
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
        category: '',
      },
      categories: [],
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
        name: 'instant-feedback',
        params: { usersFirstVisit: false },
      })
    } else {
      this.getAPIResponse()
    }
  },
  computed: {
    getCategory() {
      if (this.product.category !== '') {
        return this.product.category
      } else {
        return 'Category'
      }
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
      // 306 - data is incomplete
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
        } else if (is_big_ten === false) {
          this.feedback = 'good'
        } else if (httpStatus === 211) {
          this.feedback = 'unchecked'
        }
        this.updateProductData(response)
        this.disableLoadingScreens()
      }
    },
    updateProductData(response) {
      this.product.name = response.data.fields.name || ''
      this.product.brand = response.data.fields.brand || ''
      this.product.corporation = response.data.fields.corporation || ''
      this.product.category = response.data.fields.main_product_category || ''
    },
    disableLoadingScreens() {
      this.isLoadingScreenActive = false
      this.isDataRequestScreenActive = false
    },
    onClickAddInfoButton() {
      FeedbackService.getCategories()
      .then(resp => (
        this.showInputScreen(resp)
      ))
    },
    showInputScreen(resp) {
      this.categories = resp.data
      this.isProductInputActive = true
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
