<template lang="html">
  <div class="product-info">
    <div v-if="!productName" class="loading-animation">
      <GLoadingAnimation />
    </div>

    <div v-else>
      <div class="close-button" @click="$emit('closeInfoModal')" data-cy="info-close-button">
        <CloseIcon />
      </div>

      <div class="food-icon">
        <FoodIcon />
      </div>

      <div class="brand">
        <GTitle long>
          <slot slot="title">{{ productName }}</slot>
        </GTitle>
      </div>

      <div class="company-description">
        {{ description }}
      </div>

      <InfoSlideUpInfoBox
        class="info-box"
        :brand="productBrand"
      />

      <GButton
        class="back-button"
        @click="onClickScanAgain"
        data-cy="info-scan-again-button"
        feedback
        @onClickFeedback="onClickFeedback"
      >
        <slot slot="title">Scan again</slot>
      </GButton>
    </div>
  </div>
</template>

<script>
import CloseIcon from '@/assets/common/CloseIcon.vue'
import FoodIcon from '@/assets/product/FoodIcon.vue'
import GButton from '@/components/ui/GButton.vue'
import GLoadingAnimation from '@/components/ui/GLoadingAnimation.vue'
import GTitle from '@/components/ui/GTitle.vue'
import InfoSlideUpInfoBox from './InfoSlideUpInfoBox.vue'
import FeedbackService from '@/FeedbackService'

export default {
  name: 'InfoSlideUp',
  components: {
    CloseIcon,
    FoodIcon,
    GButton,
    GLoadingAnimation,
    GTitle,
    InfoSlideUpInfoBox,
  },
  data() {
    return {
      description: '',
    }
  },
  props: {
    productName: {
      type: String,
      required: true,
    },
    productBrand: {
      type: String,
      required: true,
    },
    barcode: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.getProductData()
  },
  methods: {
    getProductData() {
      this.description = ''
    },
    onClickScanAgain() {
      this.$router.push({
        name: 'instant-feedback',
        params: { usersFirstVisit: false },
      })
    },
    onClickFeedback(bool) {
      FeedbackService.postValidation(this.barcode, bool, !bool)
      .then(resp => (
        console.log('successfull', resp)
      ))
    },
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

  .loading-animation {
    position: fixed;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -0%);
  }
  .close-button {
    margin: .5rem;
    position: absolute;
  }
  .food-icon {
    padding: 1rem 0;
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
  }
  .info-box {
    margin: 1rem;
  }
  .back-button {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -30%);
  }
}
</style>
