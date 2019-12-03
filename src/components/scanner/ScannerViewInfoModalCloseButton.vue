<template lang="html">
  <div class="scanner-view-info-modal-back-button">
    <GButton @click="$emit('onClickCloseModal')">
      <slot slot="title">Let's Go!</slot>
    </GButton>
  </div>
</template>

<script>
import GButton from '@/components/ui/GButton'

export default {
  name: 'ScannerViewInfoModalCloseButton',
  components: {
    GButton,
  }
}
</script>

<style lang="scss" scoped>
.scanner-view-info-modal-back-button {
  margin: 0 auto;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
}
</style>
