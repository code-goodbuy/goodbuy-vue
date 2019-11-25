<template lang="html">
  <div class="product-view">
    <div v-if="!feedbackTitle" class="loading-animation">
      <GLoadingAnimation />
    </div>

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
        @click="onClickShowInfo"
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
    }
  },
  created() {
    this.isBigTen()
    this.updateContent()
  },
  methods: {
    isBigTen() {
      const random = Math.floor(Math.random() * 4)
      if (random == 0) {
        this.badItem = true
      } else if (random == 1) {
        this.goodItem = true
      } else if (random == 2) {
        this.recommendedItem = true
      }
      this.productName = 'test-name'
      if (process.env.NODE_ENV === 'production') {
        axios
        .get('https://dev-goodbuy.herokuapp.com/feedback/90415296/')
        .then(response => (console.log(response)))
      } else if (process.env.NODE_ENV === 'development') {
        axios
        .get('/feedback/90415296/')
        .then(response => (console.log(response)))
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
    onClickShowInfo() {
      this.isInfoModalActive = true
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

  .loading-animation {
    position: fixed;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -0%);
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
