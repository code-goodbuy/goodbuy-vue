<template>
  <div class="scanner-view">
    <div class="content" :class="{'blur-content': showModal || !scannerStarted}">
      <InfoButton @showInfo="showInfo" />
      <Overlay />
      <scanner
        v-show="scannerStarted"
        @updateBarcode="updateBarcode"
        @scannerStarted="scannerStarted = true"
      />
      <div style="background-color: black; width: 100%; height: 100%;"/>
      <InfoBanner />
    </div>

    <transition name="modal">
      <GInfoModal v-if="showModal" @closeModal="hideInfo" />
    </transition>

    <GLoadingAnimation white v-show="!scannerStarted"/>
  </div>
</template>

<script>
import Scanner from './Scanner'
import GInfoModal from '../ui/GInfoModal'
import InfoButton from './InfoButton'
import Overlay from './Overlay'
import InfoBanner from './InfoBanner.vue'
import GLoadingAnimation from '../ui/GLoadingAnimation.vue'

export default {
  name: 'ScannerView',
  data() {
    return {
      barcode: '',
      showModal: true,
      scannerStarted: false,
    }
  },
  components: {
    Scanner,
    GInfoModal,
    InfoButton,
    Overlay,
    InfoBanner,
    GLoadingAnimation,
  },
  mounted() {
    this.showModal = this.$route.params.firstVisit
  },
  methods: {
    updateBarcode(barcode) {
      if (!this.showModal) {
        this.$router.push({ name: 'product-screen', params: {code: barcode}})
      }
    },
    showInfo() {
      this.showModal = true
    },
    hideInfo() {
      this.showModal = false
    }
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
