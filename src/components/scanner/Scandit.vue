<template lang="html">
  <div class="scandit">
    <div id="scandit-barcode-picker" style="max-width: 1280px; max-height: 100%;"></div>
  </div>
</template>

<script>
import * as ScanditSDK from "scandit-sdk"

export default {
  name: 'Scandit',
  mounted () {
    this.initScanner()
  },
  methods: {
    initScanner() {
      const LICENSE_KEY = process.env.VUE_APP_SCANDIT_SECRET
      const engineLocation = "https://cdn.jsdelivr.net/npm/scandit-sdk@4.2.2"
      // const engineLocation = "/dist"
      // const engineLocation = "node_modules/"
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
      if (this.$route.path == '/fridge-karma'){
        this.$store.commit('updateMultipleBarcodes', barcode)
      }
      else{
        this.$emit('onBarcodeDetected', barcode)
      }
    },
    onReady() {
      this.$emit('onScannerStarted')
    }
  }
}
</script>

<style lang="scss" scoped>
.scandit {
  pointer-events: none;
}
</style>
