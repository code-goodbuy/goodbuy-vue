<template>
  <div class="scanner-view-info-modal">
    <GTextHeader class="text-box">
      <slot slot="title">
        How it works
      </slot>
    </GTextHeader>

    <GListElement class="list-box">
      <slot slot="index">1.</slot>
      <slot slot="title">Choose an item to scan</slot>
      <slot slot="content">Pick a grocery product you want to scan</slot>
    </GListElement>

    <GListElement class="list-box">
      <slot slot="index">2.</slot>
      <slot slot="title">Scan the item</slot>
      <slot slot="content">Point your camera at the EAN code </slot>
    </GListElement>

    <GListElement class="list-box">
      <slot slot="index">3.</slot>
      <slot slot="title">Receive Feedback</slot>
      <slot slot="content">Enjoy the feedback on your product</slot>
    </GListElement>

    <div class="btn-container">
      <GButton @click="test">
        <slot slot="title">Let's Go!</slot>
      </GButton>
    </div>

  </div>
</template>

<script>
import GButton from '@/components/ui/GButton'
import GListElement from '@/components/ui/GListElement'
import GTextHeader from '@/components/ui/GTextHeader'

export default {
  name: 'ScannerViewInfoModal',
  components: {
    GButton,
    GListElement,
    GTextHeader,
  },
  methods: {
    test() {
      this.$emit('closeModal')
    }
  }
};
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
    .btn-container {
      margin: 0 auto;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, -50%);
    }
    .list-box {
      margin: 3vw 0;
    }
  }
</style>
