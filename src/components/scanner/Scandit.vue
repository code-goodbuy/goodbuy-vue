<template lang="html">
  <div class="">
    <div id="scandit-barcode-picker" style="max-width: 1280px; max-height: 100%;"></div>
  </div>
</template>

<script>
import * as ScanditSDK from "scandit-sdk"
import VueScreenSize from 'vue-screen-size'

export default {
  name: 'Scandit',
  mixins: [VueScreenSize.VueScreenSizeMixin],
  mounted () {
    this.initScanner()
  },
  watch: {
    $vssWidth() {
      this.initScanner()
    },
    $vssHeight() {
      this.initScanner()
    }
  },
  methods: {
    initScanner() {
      const LICENSE_KEY = process.env.VUE_APP_SCANDIT_SECRET
      const engineLocation = "https://unpkg.com/scandit-sdk/build"
      ScanditSDK.configure(LICENSE_KEY, {
        engineLocation: engineLocation,
        preloadEngineLibrary: true,
        preloadCameras: true})
      ScanditSDK.BarcodePicker.create(document.getElementById("scandit-barcode-picker"), {
        enablePinchToZoom: false,
        enableCameraSwitcher: false,
        enableTorchToggle: false,
        guiStyle: null,
        videoFit: true,
      }).then((barcodePicker) => {
        var scanSettings = new ScanditSDK.ScanSettings({
          blurryRecognition: false,
          enabledSymbologies: ["ean8", "ean13"],
          codeDuplicateFilter: 1000,
          searchArea: {x: .1, y: .35, width: .8, height: .3}
        })
        barcodePicker.applyScanSettings(scanSettings)

        barcodePicker.on("ready", () => {
          this.onReady()
        })
        barcodePicker.on("scan", (scanResult) => {
          let barcode = scanResult.barcodes.reduce(function(string, barcode) {
            return barcode.data
          }, "")
          this.onBarcodeDetect(barcode)
        })
      })
    },
    onBarcodeDetect(barcode) {
      this.$emit('onBarcodeDetect', barcode)
    },
    onReady() {
      this.$emit('scannerStarted')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
