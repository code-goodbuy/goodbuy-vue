<template lang="html">
  <div class="product-screen">
    <div v-if="!feedbackTitle" class="loading-animation">
      <GLoadingAnimation />
    </div>

    <div v-else>
      <div class="feedback-icon">
        <PosFeedbackIcon v-if="goodItem"/>
        <NegFeedbackIcon v-else-if="badItem"/>
        <MissingItemIcon v-else />
      </div>

      <div class="feedback-content">
        <GTextHeader centered big>
          <slot slot="title">{{ feedbackTitle }}</slot>
          <slot slot="content">{{ feedbackMessage }}</slot>
        </GTextHeader>

        <InfoButton @click="showInfo">
          <slot slot="title">{{ infoButtonTitle }}</slot>
        </InfoButton>
      </div>

      <div class="back-button">
        <GButton @click="goBack">
          <slot slot="title">Scan Again</slot>
        </GButton>
      </div>
    </div>

    <transition name="slide-up">
      <ProductInfo v-if="isInfoModalActive" @closeInfoModal="isInfoModalActive = false"/>
    </transition>
  </div>
</template>

<script>
import GButton from '../ui/GButton'
import PosFeedbackIcon from '../../assets/feedback/PosFeebackIcon'
import NegFeedbackIcon from '../../assets/feedback/NegFeedbackIcon'
import MissingItemIcon from '../../assets/feedback/MissingItemIcon'
import GTextHeader from '../ui/GTextHeader'
import InfoButton from './InfoButton'
import GLoadingAnimation from '../ui/GLoadingAnimation'
import ProductInfo from './ProductInfo.vue'

export default {
  name: 'ProductFeedback',
  components: {
    GButton,
    PosFeedbackIcon,
    NegFeedbackIcon,
    MissingItemIcon,
    GTextHeader,
    InfoButton,
    GLoadingAnimation,
    ProductInfo,
  },
  data() {
    return {
      goodItem: false,
      badItem: false,
      isInfoModalActive: false,
      feedbackTitle: '',
      feedbackMessage: '',
      infoButtonTitle: '',
      productName: '',
    }
  },
  created() {
    this.isBigTen()
    this.updateContent()
  },
  methods: {
    isBigTen() {
      this.badItem = true
      this.productName = 'test-name'
    },
    updateContent() {
      if (this.goodItem) {
        this.feedbackTitle = 'Yah!'
        this.feedbackMessage = 'The product that you scanned is not from one of the 10 big concerns.'
        this.infoButtonTitle = 'I want to know more'
      } else if (this.badItem) {
        this.feedbackTitle = 'Nah...'
        this.feedbackMessage = 'The product that you scanned is from one of the 10 big concerns.'
        this.infoButtonTitle = 'I want to know more'
      } else {
        this.feedbackTitle = 'Well...'
        this.feedbackMessage = 'We are sorry the product that you scanned is currently not in our database'
        this.infoButtonTitle = 'Enter product data'
      }
    },
    goBack() {
      this.$router.push({
        name: 'scanner',
        params: { firstVisit: false },
      })
    },
    showInfo() {
      if (this.goodItem || this.badItem) {
        this.isInfoModalActive = true
      } else {
        this.$router.push({
          name: 'enter-product-data',
          params: {
            code: this.$route.params.code
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.product-screen {
  .loading-animation {
    position: fixed;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -0%);
  }
  .feedback-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .feedback-content {
    button {
      margin: 1.5rem auto;
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
