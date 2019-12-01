<template lang="html">
  <div class="product-view-back-button">
    <GButton @click="$emit('onClickScanAgain')">
      <slot slot="title">Scan Again</slot>
    </GButton>
    <GButton
      v-if="isAddInfoShown"
      black
      @click="$emit('onClickBackButton')"
    >
      <slot slot="title">Add Info</slot>
    </GButton>
  </div>
</template>

<script>
import GButton from '@/components/ui/GButton.vue'

export default {
  name: 'ProductViewBackButton',
  components: {
    GButton,
  },
  props: {
    isAddInfoShown: {
      type: Boolean,
      required: true,
    }
  }
}
</script>

<style lang="css" scoped>
.product-view-back-button {
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}
</style>
