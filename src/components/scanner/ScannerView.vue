<template>
  <div class="scanner-view">
    <div :class="{'blur-content': showModal}">
      <div class="info-button" @click="showInfo">
        i
      </div>
      <div class="overlay" />
      <scanner
      @updateBarcode="updateBarcode"
      />
      <div class="info-banner">
        Point you camera at a barcode
      </div>
    </div>
    <GInfoModal v-if="showModal" @closeModal="hideInfo" />
  </div>
</template>

<script>
import Scanner from './Scanner'
import GInfoModal from '../ui/GInfoModal'

export default {
  name: 'ScannerView',
  data() {
    return {
      barcode: '',
      showModal: true
    }
  },
  components: {
    Scanner,
    GInfoModal,
  },
  methods: {
    updateBarcode(barcode) {
      console.log(barcode)
      this.barcode = barcode
    },
    showInfo() {
      console.log('here')
      this.showModal = true
    },
    hideInfo() {
      console.log('hide')
      this.showModal = false
    }
  }
}
</script>

<style lang="scss">
.scanner-view {
  background-color: black;
  .blur-content {
    filter: blur(3px);
  }
  .info-button {
    height: 23px;
    width: 23px;
    position: absolute;
    top: 10px;
    left: 10px;

    position: absolute;
    border-radius: 50%;
    border: 2px solid white;
    color: white;

    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 20px;

    z-index: 1;
}
  .overlay:after{
    content:'';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    max-width: 80%;
    width: 10000px;
    padding: 0 -1rem;
    height: 150px;

    box-shadow: 0px 0px 0px 2000px black;
    opacity: 50%;
    border-radius: 15px;
    border: solid white;
  }

  .info-banner {
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);

    padding: .5rem 0;

    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;

    text-align: center;
    white-space: nowrap;
    background-color: #90D2D9;
  }
}
</style>
