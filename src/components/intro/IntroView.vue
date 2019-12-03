<template lang="html">
  <div class="welcome-screen">
    <IntroViewHeaderBar data-cy="intro-header-bar"/>
    <IntroViewContent data-cy="intro-content"/>
    <IntroViewButton data-cy="intro-button-scan"/>
  </div>
</template>

<script>
import IntroViewButton from './IntroViewButton.vue'
import IntroViewContent from './IntroViewContent.vue'
import IntroViewHeaderBar from './IntroViewHeaderBar.vue'

export default {
  name: 'IntroView',
  components: {
    IntroViewButton,
    IntroViewContent,
    IntroViewHeaderBar,
  }
}
</script>

<style lang="scss" scoped>
.welcome-screen {
}
</style>
