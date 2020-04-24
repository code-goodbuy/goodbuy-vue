<template>
  <div class="scanner-view-info-modal">
    <ModalTitle />
    <template v-if="isSingleScan">
      <GListElement class="list-box">
        <slot slot="index">1.</slot>
        <slot slot="title">Choose an item to scan</slot>
        <slot slot="content">Pick a grocery product you want to scan</slot>
      </GListElement>

      <GListElement class="list-box">
        <slot slot="index">2.</slot>
        <slot slot="title">Scan the item </slot>
        <slot slot="content">Point your camera at the EAN code</slot>
      </GListElement>

      <GListElement class="list-box">
        <slot slot="index">3.</slot>
        <slot slot="title">Receive Feedback</slot>
        <slot slot="content">Enjoy the feedback on your product</slot>
      </GListElement>
    </template>
    <template v-else>
      <GListElement class="list-box">
        <slot slot="index">1.</slot>
        <slot slot="title">Scan all products in your fridge</slot>
        <slot slot="content">Pick the items you want to scan from your fridge</slot>
      </GListElement>

      <GListElement class="list-box">
        <slot slot="index">2.</slot>
        <slot slot="title">Wait a second ...</slot>
        <slot slot="content">So we can analyse your products</slot>
      </GListElement>

      <GListElement class="list-box">
        <slot slot="index">3.</slot>
        <slot slot="title">Receive your Karma Score</slot>
        <slot slot="content">Click on the Get Karma button to see your Karma Score</slot>
      </GListElement>
    </template>

    <CloseButton
      @onClickCloseModal="onClickCloseModal"
    />
  </div>
</template>

<script>
import GListElement from '@/components/ui/GListElement'
import ScannerViewInfoModalCloseButton from './ScannerViewInfoModalCloseButton.vue'
import ScannerViewInfoModalTitle from './ScannerViewInfoModalTitle.vue'

export default {
  name: 'ScannerViewInfoModal',
  props: {
    isSingleScan: {
      type: Boolean,
      default: false,
    }
  },
  components: {
    GListElement,
    'CloseButton': ScannerViewInfoModalCloseButton,
    'ModalTitle': ScannerViewInfoModalTitle,
  },
  methods: {
    onClickCloseModal() {
      this.$emit('closeModal')
    }
  },
}
</script>


<style lang="scss" scoped>
.scanner-view-info-modal {
  padding: 1rem 0;
  margin: 70px 20px;
  border-radius: 10px;
  background-color: white;

  position: absolute;
  z-index: 4;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .list-box {
    margin: 3vw 0;
  }
}
</style>
