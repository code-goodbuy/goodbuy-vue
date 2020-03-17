<template>
  <div class="page-not-found">
    <div class="feedback-icon">
      <PageNotFoundIcon />
    </div>

    <GTextHeader
      class="feedback-content"
      centered
      big
      data-cy="feedback-content"
    >
      <slot slot="title">Oops...</slot>
      <slot slot="content">
        Looks like you've followed a broken link or entered a URL that doesn't exist on the site.
      </slot>
    </GTextHeader>

    <BackButton
      :isAddInfoShown="false"
      @onClickScanAgain="onClickScanAgain"
      @onClickBackButton="$emit('onClickBackButton')"
    />
  </div>
</template>

<script>
import GTextHeader from '@/components/ui/GTextHeader.vue'
import FeedbackViewBackButton from '@/components/product/FeedbackViewBackButton.vue'
import PageNotFoundIcon from '@/assets/common/PageNotFoundIcon.vue'

export default {
  name: "PageNotFound",
  components: {
    GTextHeader,
    'BackButton': FeedbackViewBackButton,
    PageNotFoundIcon,
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
.page-not-found {
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
