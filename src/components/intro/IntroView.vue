<template lang="html">
  <div class="welcome-screen">
    <div
      :class="{
        'blur-page': isInfoModalActive && !$auth.isAuthenticated
      }"
    >
    <HeaderBar data-cy="header-bar"/>
    <IntroViewContent data-cy="intro-content"/>
    <IntroViewContact data-cy="intro-contact" />
    <IntroViewButton data-cy="intro-button-scan"/>
    </div>
    <transition v-if="!$auth.isAuthenticated" name="info-modal">
      <IntroViewModal
        @isRegistered="setFalse"
        v-if="isInfoModalActive"
        @closeModal="isInfoModalActive = false"
      />
    </transition>
  </div>
</template>

<script>
import IntroViewButton from './IntroViewButton.vue'
import IntroViewContact from './IntroViewContact.vue'
import IntroViewContent from './IntroViewContent.vue'
import HeaderBar from '@/components/ui/GHeaderBar.vue'
import IntroViewModal from './IntroViewModal.vue'

export default {
  name: 'IntroView',
  components: {
    IntroViewButton,
    IntroViewContact,
    IntroViewContent,
    HeaderBar,
    IntroViewModal
  },
  methods: {
    setFalse(event) {
      this.isInfoModalActive =  event
    }
  },
  data() {
    return {
      isInfoModalActive: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome-screen {
}
.blur-page {
  filter: blur(2px);
}
</style>
