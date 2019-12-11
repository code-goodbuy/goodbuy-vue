<template>
  <div class="scanner-view">
    <div
      :class="{
        'blur-page': isInfoModalActive || !isScannerStarted
      }"
    >
      <InfoButton
        v-if="!isInfoModalActive && isScannerStarted"
        @onClickInfoButton="isInfoModalActive = true"
      />
      <Overlay v-if="isScannerStarted"/>
      <keep-alive>
        <Scanner
          v-show="isScannerStarted"
          @onScannerStarted="isScannerStarted = true"
          @onBarcodeDetected="onBarcodeDetected"
        />
      </keep-alive>
      <InfoBanner v-if="isScannerStarted"/>
      <div class="loading-screen-background"/>
    </div>

    <transition name="info-modal">
      <InfoModal
        v-if="isInfoModalActive"
        @closeModal="isInfoModalActive = false"
      />
    </transition>

    <GLoadingAnimation
      v-show="!isScannerStarted"
      whiteLogo
    >
      <slot slot="description">Scanner is loading...</slot>
    </GLoadingAnimation>
  </div>
</template>

<script>
import GLoadingAnimation from '@/components/ui/GLoadingAnimation.vue'
import Scandit from './Scandit.vue'
import ScannerViewInfoBanner from './ScannerViewInfoBanner.vue'
import ScannerViewInfoButton from './ScannerViewInfoButton.vue'
import ScannerViewInfoModal from './ScannerViewInfoModal.vue'
import ScannerViewOverlay from './ScannerViewOverlay.vue'

export default {
  name: 'ScannerView',
  components: {
    GLoadingAnimation,
    'Scanner': Scandit,
    'InfoBanner': ScannerViewInfoBanner,
    'InfoButton': ScannerViewInfoButton,
    'InfoModal': ScannerViewInfoModal,
    'Overlay': ScannerViewOverlay,
  },
  data() {
    return {
      barcode: '',
      isScannerStarted: false,
      isInfoModalActive: false,
    }
  },
  mounted() {
    const isFirstVisit = this.$route.params.usersFirstVisit
    this.isInfoModalActive = isFirstVisit
  },
  beforeDestroy() {
    console.log('destroyed');
  },
  methods: {
    onBarcodeDetected(barcode) {
      if (!this.isInfoModalActive) {
        this.$router.push({ name: 'product', params: {code: barcode}})
      }
    },
  }
}
</script>

<style lang="scss">
.scanner-view {
  width: 100%;
  height: 100%;
  background-color: black;

  .loading-screen-background {
    background-color: black;
    width: 100%;
    height: 100%;
  }

  .blur-page {
    filter: blur(2px);
  }

  .loading-animation {
    position: fixed;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -0%);
  }

  .info-modal-enter {
    opacity: 0;
  }

  .info-modal-leave-active {
    opacity: 0;
  }

  .info-modal-enter .info-modal-container,
  .info-modal-leave-active .info-modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .info-modal-enter-active, .info-modal-leave-active {
    transition: opacity .2s
  }
}
</style>
