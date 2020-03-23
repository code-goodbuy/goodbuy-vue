<template>
  <div id="app">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">

    <transition name="page-fade" mode="out-in">
      <router-view v-if="!isDesktop && !isHorizontal && !isTooOld"/>
    </transition>

    <Desktop v-if="isDesktop" />
    <Horizontal v-else-if="isHorizontal" />
    <OldDevice v-else-if="isTooOld" />
  </div>
</template>

<script>
import Desktop from '@/fallbacks/Desktop.vue'
import Horizontal from '@/fallbacks/Horizontal.vue'
import OldDevice from '@/fallbacks/OldDevice.vue'
import VueScreenSize from 'vue-screen-size'

export default {
  name: 'App',
  mixins: [VueScreenSize.VueScreenSizeMixin],
  components: {
    Desktop,
    Horizontal,
    OldDevice,
  },
  data() {
    return {
      isDesktop: false,
      isHorizontal: false,
      isTooOld: false,
    }
  },
  watch: {
    $vssWidth() {
      this.checkScreenDimensions()
    },
    $vssHeight() {
      this.checkScreenDimensions()
    }
  },
  mounted() {
    this.checkScreenDimensions()
  },
  methods: {
    checkScreenDimensions() {
      this.isDesktop = this.$vssWidth > 700 && this.$vssHeight > 700
      this.isHorizontal = this.$vssWidth > this.$vssHeight
      this.isTooOld = this.$vssWidth < 300 && this.$vssHeight < 560
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
  overflow: scroll;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* transition effects */
.page-fade-enter-active,
.page-fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.page-fade-enter,
.page-fade-leave-active {
  opacity: 0
}
</style>
