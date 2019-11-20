<template>
  <div id="app">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
    <transition name="fade" mode="out-in">
      <router-view v-if="isMobile && isVertical && !isTooOld"/>
    </transition>
    <!-- TODO - Refactor this into components -->
    <div v-if="!isMobile">This app currently only works on mobile</div>
    <div v-else-if="!isVertical">This app currently only works horizontally</div>
    <div v-else-if="isTooOld">This app currently only works on modern devices</div>
  </div>
</template>

<script>
import VueScreenSize from 'vue-screen-size'

export default {
  name: 'app',
  mixins: [VueScreenSize.VueScreenSizeMixin],
  data() {
    return {
      isMobile: true,
      isVertical: true,
      isTooOld: false,
    }
  },
  watch: {
    $vssWidth() {
      this.checkWindow()
    },
    $vssHeight() {
      this.checkWindow()
    }
  },
  mounted() {
    this.checkWindow()
  },
  methods: {
    checkWindow() {
      if (this.$vssWidth > this.$vssHeight) {
        this.isVertical = false
      } else {
        this.isVertical = true
      }
      if (this.$vssWidth > 500 || this.$vssHeight > 900) {
        this.isMobile = false
      } else {
        this.isMobile = true
      }
      if (this.$vssWidth < 300 && this.$vssHeight < 560) {
        this.isTooOld = true
      } else {
        this.isTooOld = false
      }
    }
  }
}
</script>

<style>
body { margin: 0; }
#app {
  width: 100%;
  height: 100%;
  position: fixed;
  margin: 0;
  height: 100%;
  overflow: hidden;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* transition effects */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
