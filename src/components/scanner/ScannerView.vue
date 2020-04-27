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
        :isSingleScan="isSingleScan"
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
    <GButton
      v-if="!isSingleScan && !isInfoModalActive && isScannerStarted"
      @click="getKarma"
      class="karma-button"
    >
    <slot slot="title">
      Get Karma
    </slot>
    </GButton>

  </div>
</template>

<script>
import GLoadingAnimation from '@/components/ui/GLoadingAnimation.vue'
import Scandit from './Scandit.vue'
import ScannerViewInfoBanner from './ScannerViewInfoBanner.vue'
import ScannerViewInfoButton from './ScannerViewInfoButton.vue'
import ScannerViewInfoModal from './ScannerViewInfoModal.vue'
import ScannerViewOverlay from './ScannerViewOverlay.vue'
import GButton from '@/components/ui/GButton.vue'

export default {
  name: 'ScannerView',
  components: {
    GLoadingAnimation,
    'Scanner': Scandit,
    'InfoBanner': ScannerViewInfoBanner,
    'InfoButton': ScannerViewInfoButton,
    'InfoModal': ScannerViewInfoModal,
    'Overlay': ScannerViewOverlay,
    'GButton': GButton,
  },
  data() {
    return {
      isScannerStarted: false,
      isInfoModalActive: false,
      isSingleScan: true
    }
  },
  created() {
    if (this.$route.path == '/fridge-karma'){
      this.isSingleScan = false
    }
    else{
      this.isSingleScan = true
    }
  },
  mounted() {

    const isFirstVisit = this.$route.params.usersFirstVisit
    this.isInfoModalActive = isFirstVisit
    this.$store.commit('resetBarcode')
    this.$store.commit('resetMultipleBarcodes')
  },
  beforeDestroy() {
    console.log('destroyed');
  },
  methods: {
    onBarcodeDetected(barcode) {
      if (!this.isInfoModalActive) {
        this.$store.commit('updateBarcode', barcode)
        this.$router.push({ name: 'product' , params: { 'code': barcode }})
      }
    },
    getKarma() {
      if (this.$store.state.multipleBarcodes.size > 0){
        if (!this.isInfoModalActive) {
        //has to be changed to table view when table view exists
        this.$router.push('fridge-karma/result/')
        }
      }
      else {
        alert("Please scan a product")
      }
    }
  }
}
</script>

<style lang="scss">
.karma-button {
  position: fixed;
  left: 50%;
  bottom: 15%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}
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
