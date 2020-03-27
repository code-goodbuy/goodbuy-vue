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
    <button 
      v-if="!isSingleScan && !isInfoModalActive && isScannerStarted"
      @click="getKarma"
      class="karma-button"
    >
      Get Karma
    </button>

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
        this.$router.push('feature')
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
  /* Popup Button */


  position: absolute;
  left: 34.13%;
  right: 34.13%;
  top: 82.61%;
  bottom: 10.49%;
  background: #90D2D9;
  border-radius: 30%;
  /* goodbuy/Headlines Sub */

  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  /* goodbuy/Black */

  color: #272727;
  /* goodbuy/Button shadow */
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.353);
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
