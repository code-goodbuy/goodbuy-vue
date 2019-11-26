<template>
  <div class="scanner-view">
    <div class="content" :class="{'blur-content': showModal || !scannerStarted}">
      <ScannerViewInfoButton v-if="!showModal" @showInfo="showModal = true" />
      <ScannerViewOverlay />
      <!-- <scanner
        v-show="scannerStarted"
        @updateBarcode="updateBarcode"
        @scannerStarted="scannerStarted = true"
      /> -->
      <Scandit
        v-show="scannerStarted"
        @scannerStarted="scannerStarted = true"
        @updateBarcode="updateBarcode"
      />
      <div class="loading-background"/>
      <ScannerViewInfoBanner />
    </div>

    <transition name="modal">
      <ScannerViewInfoModal v-if="showModal" @closeModal="showModal = false" />
    </transition>

    <GLoadingAnimation white v-show="!scannerStarted"/>
  </div>
</template>

<script>
import ScannerViewInfoModal from './ScannerViewInfoModal.vue'
import GLoadingAnimation from '@/components/ui/GLoadingAnimation.vue'
import ScannerViewInfoBanner from './ScannerViewInfoBanner.vue'
import ScannerViewInfoButton from './ScannerViewInfoButton.vue'
import ScannerViewOverlay from './ScannerViewOverlay.vue'
import Scandit from './Scandit.vue'

export default {
  name: 'ScannerView',
  components: {
    ScannerViewInfoModal,
    GLoadingAnimation,
    ScannerViewInfoBanner,
    ScannerViewInfoButton,
    ScannerViewOverlay,
    Scandit,
  },
  data() {
    return {
      barcode: '',
      scannerStarted: true,
      showModal: true,
    }
  },
  mounted() {
    this.showModal = this.$route.params.firstVisit
  },
  methods: {
    updateBarcode(barcode) {
      if (!this.showModal) {
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

  .content {
    width: 100%;
    height: 100%;
  }
  .loading-animation {
    position: fixed;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -0%);
  }
  .loading-background {
    background-color: black;
    width: 100%;
    height: 100%;
  }
  .blur-content {
    filter: blur(2px);
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  .modal-enter-active, .modal-leave-active {
    transition: opacity .2s
  }
}
</style>
