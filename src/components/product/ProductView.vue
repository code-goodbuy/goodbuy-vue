<template lang="html">
  <div class="product-view">
    <div v-if="showDefaultLoading" class="def-loading">
      <GLoadingAnimation
        class="loading-animation"
      />
    </div>

    <LoadingView
      v-else-if="showLoadingScreen"
      @updateView="updateView"
      @onClickBackButton="$router.push({name: 'scanner'})"
    />

    <div class="flex-container" v-else>
      <div class="feedback-icon">
        <RecommendedItemIcon v-if="recommendedItem"/>
        <PosFeedbackIcon v-else-if="goodItem"/>
        <NegFeedbackIcon v-else-if="badItem"/>
        <MissingItemIcon v-else />
      </div>

      <GTextHeader
        class="feedback-content"
        centered
        big
      >
        <slot slot="title">{{ feedbackTitle }}</slot>
        <slot slot="content">{{ feedbackMessage }}</slot>
      </GTextHeader>

      <ProductViewInfoButton
        v-if="recommendedItem || goodItem || badItem"
        class="feedback-button"
        @click="isInfoModalActive = true"
      >
        <slot slot="title">I want to know more</slot>
      </ProductViewInfoButton>


      <div class="back-button-container">
        <GButton @click="onClickScanAgain">
          <slot slot="title">Scan Again</slot>
        </GButton>
        <GButton
          v-if="!recommendedItem && !badItem && !goodItem"
          @click="onClickAddInfo"
          black
        >
          <slot slot="title">Add Info</slot>
        </GButton>
      </div>
    </div>

    <transition name="slide-up">
      <InfoSlideUp
        :productName="productName"
        :productBrand="productBrand"
        v-if="isInfoModalActive"
        @closeInfoModal="isInfoModalActive = false"
      />
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
import GButton from '@/components/ui/GButton.vue'
import GLoadingAnimation from '@/components/ui/GLoadingAnimation.vue'
import GTextHeader from '@/components/ui/GTextHeader.vue'
import ProductViewInfoButton from './ProductViewInfoButton.vue'
import MissingItemIcon from '@/assets/product/MissingItemIcon.vue'
import NegFeedbackIcon from '@/assets/product/NegFeedbackIcon.vue'
import PosFeedbackIcon from '@/assets/product/PosFeebackIcon.vue'
import InfoSlideUp from './info/InfoSlideUp.vue'
import RecommendedItemIcon from '@/assets/product/RecommendedItemIcon.vue'
import LoadingView from './LoadingView.vue'

export default {
  name: 'ProductView',
  components: {
    GButton,
    GLoadingAnimation,
    GTextHeader,
    ProductViewInfoButton,
    MissingItemIcon,
    NegFeedbackIcon,
    PosFeedbackIcon,
    InfoSlideUp,
    RecommendedItemIcon,
    LoadingView,
  },
  data() {
    return {
      recommendedItem: false,
      badItem: false,
      feedbackMessage: '',
      feedbackTitle: '',
      goodItem: false,
      infoButtonTitle: '',
      isInfoModalActive: false,
      productName: '',
      productBrand: '',
      invalidBarcode: false,
      showLoadingScreen: false,
      showDefaultLoading: true,
    }
  },
  watch:{
    $route (){
      location.reload()
    }
  },
  created() {
    if (isNaN(this.$route.params.code) || this.$route.params.code.length !== 13) {
      this.$router.push({
        name: 'scanner',
        params: { firstVisit: false },
      })
    } else {
      // this.isBigTen()
    }
  },
  methods: {
    isBigTen() {
      const barcode = this.$route.params.code
      console.log(process.env.VUE_APP_FEEDBACK_API_URL);
      axios
      .get(`${process.env.VUE_APP_FEEDBACK_API_URL}${barcode}/`)
      .then(resp => (
        this.updateView(resp)
      ))
    },
    updateView(response) {
      console.log(response)
      if (response.status === 209) {
        this.showLoadingScreen = true
      } else {
        if (response.data.is_big_ten === "True") {
          this.badItem = true
          this.productName = response.data.fields.name
          this.productBrand = response.data.fields.brand
        } else if (response.data.is_big_ten === "False") {
          this.goodItem = true
          this.productName = response.data.fields.name
          this.productBrand = response.data.fields.brand
        }
        this.updateContent()
        this.showDefaultLoading = false
        this.showLoadingScreen = false
      }
    },
    updateContent() {
      if (this.recommendedItem) {
        this.feedbackTitle = 'Yah!'
        this.feedbackMessage = 'Congrats! This product is recommended by Goodbuy! '
      } else if (this.goodItem) {
        this.feedbackTitle = 'Aah!'
        this.feedbackMessage = 'Cool, your product does not belong to one of the biggest 10 corporations.'
      } else if (this.badItem) {
        this.feedbackTitle = 'Nah...'
        this.feedbackMessage = 'The product that you scanned is from <Company>'
      } else {
        this.feedbackTitle = 'Well...'
        this.feedbackMessage = 'Sorry, the product you scanned cannot be found in our database.  Be our Hero and insert the missing information to contribute to our Goodbuy community!'
      }
    },
    onClickScanAgain() {
      this.$router.push({
        name: 'scanner',
        params: { firstVisit: false },
      })
    },
    onClickAddInfo() {
      this.$router.push({
        name: 'product-input',
        params: {
          code: this.$route.params.code
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.product-view {
  width: 100%;
  height: 100%;

  .def-loading{
    position: fixed;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
  }

  .flex-container {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .feedback-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .feedback-content {
    }
    .feedback-button{
      margin: 1rem;
    }
    .back-button-container {
      width: 100%;
      display: flex;
      justify-content: space-evenly;

      position: fixed;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, -50%);
      margin: 0 auto;
    }
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
}
</style>
