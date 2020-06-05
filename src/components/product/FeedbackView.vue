<template lang="html">
  <div class="feedback-view-recommended-item">
    <div class="feedback-icon">
      <BlacklistIcon v-if="feedback==='blacklist'"/>
      <RecommendedItemIcon v-else-if="feedback==='recommended'" data-cy="recommendet-item" />
      <PositiveFeedbackIcon v-else-if="feedback==='good'" data-cy="positive-item" />
      <NegativeFeedbackIcon v-else-if="feedback==='bad'" data-cy="negative-item" />
      <MissingItemIcon v-else />
    </div>

    <GTextHeader
      class="feedback-content"
      centered
      big
      data-cy="feedback-content"
    >
      <slot slot="title">{{ feedbackTitle }}</slot>
      <slot slot="content">
        <div v-html="feedbackMessage"></div>
      </slot>
    </GTextHeader>

    <InfoButton
      v-if="feedback"
      class="feedback-button"
      @click="$emit('onClickInfoButton')"
    >
      <slot slot="title">I want to know more</slot>
    </InfoButton>

    <BackButton
      :isAddInfoShown="!feedback"
      @onClickScanAgain="onClickScanAgain"
      @onClickAddInfoButton="$emit('onClickAddInfoButton')"
    />
  </div>
</template>

<script>
import GTextHeader from '@/components/ui/GTextHeader.vue'
import MissingItemIcon from '@/assets/product/MissingItemIcon.vue'
import NegativeFeedbackIcon from '@/assets/product/NegativeFeedbackIcon.vue'
import PositiveFeedbackIcon from '@/assets/product/PositiveFeebackIcon.vue'
import FeedbackViewBackButton from './FeedbackViewBackButton.vue'
import FeedbackViewInfoButton from './FeedbackViewInfoButton.vue'
import RecommendedItemIcon from '@/assets/product/RecommendedItemIcon.vue'
import BlacklistIcon from '@/assets/product/Blacklist.vue'

export default {
  name: 'FeedbackView',
  components: {
    GTextHeader,
    MissingItemIcon,
    NegativeFeedbackIcon,
    PositiveFeedbackIcon,
    'BackButton': FeedbackViewBackButton,
    'InfoButton': FeedbackViewInfoButton,
    RecommendedItemIcon,
    BlacklistIcon,
  },
  props: {
    feedback: {
      type: String,
      required: true,
    },
    productCorporation: {
      type: String,
      required: true,
    }
  },
  watch: {
    feedback() {
      console.log(this.feedback);
    }
  },
  computed: {
    feedbackTitle() {
      if (this.feedback === 'recommended') {
        return 'Yah!'
      } else if (this.feedback === 'good') {
        return 'Aah!'
      } else if (this.feedback === 'bad') {
        return 'Nah...'
      } else if (this.feedback === 'unchecked') {
        return 'Well...'
      } else if (this.feedback === 'blacklist') {
        return 'Blacklisted...'
      } else {
        return 'Well...'
      }
    },
    feedbackMessage() {
      if (this.feedback === 'recommended') {
        return 'Congrats! This product is recommended by Goodbuy! '
      } else if (this.feedback === 'good') {
        return 'Cool, your product does not belong to one of the biggest 10 corporations.'
      } else if (this.feedback === 'bad') {
        return `The product that you scanned is from <b>${this.productCorporation}</b>`
      } else if (this.feedback === 'unchecked') {
        return 'Great, the product you scanned was recently added to our database by a user but we are currently validating that information'
      } else if (this.feedback === 'blacklist') {
        return 'The product you scanned belongs to one of the companies you blacklisted!'
      } else {
        return 'Sorry, the product you scanned cannot be found in our database.  Be our Hero and insert the missing information to contribute to our Goodbuy community!'
      }
    },
  },
  methods: {
    onClickScanAgain() {
      this.$router.push({
        name: 'instant-feedback',
        params: { usersFirstVisit: false },
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.feedback-view-recommended-item {
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
  .feedback-button{
    margin: 1rem;
  }
}
</style>
