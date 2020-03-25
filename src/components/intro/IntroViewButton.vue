<template lang="html">
  <GButton
    class="intro-view-button"
    @click="onClickScanItem"
  >
    <slot slot="title">
      Start
    </slot>
  </GButton>
</template>

<script>
import GButton from '@/components/ui/GButton.vue'

export default {
  name: 'IntroViewButton',
  components: {
    GButton,
  },
  methods: {
    onClickScanItem() {
      this.$router.push('feature')
    }
  }
}
</script>

<style lang="css" scoped>
.intro-view-button {
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}
</style>
