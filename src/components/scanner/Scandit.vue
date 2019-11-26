<template lang="html">
  <div class="">
    <div id="scandit-barcode-picker" style="max-width: 1280px; max-height: 80%;"></div>
  </div>
</template>

<script>
import * as ScanditSDK from "scandit-sdk";

export default {
  name: 'Scandit',
  mounted () {
    const LICENSE_KEY = process.env.VUE_APP_SCANDIT_SECRET
    const engineLocation = "https://unpkg.com/scandit-sdk/build"
    ScanditSDK.configure(LICENSE_KEY, { engineLocation: engineLocation });
    ScanditSDK.BarcodePicker.create(document.getElementById("scandit-barcode-picker"), {
      enablePinchToZoom: false,
      enableCameraSwitcher: false,
      enableTorchToggle: false,
      guiStyle: 'laser',
      videoFit: true,
    }).then((barcodePicker) => {
      var scanSettings = new ScanditSDK.ScanSettings({
        enabledSymbologies: ["ean8", "ean13", "upca", "upce", "code128", "code39", "code93", "itf"],
        codeDuplicateFilter: 1000
      });
      barcodePicker.applyScanSettings(scanSettings);
      barcodePicker.on("ready", () => {
        this.ready()
      })
      barcodePicker.on("scan", (scanResult) => {
        let barcode = scanResult.barcodes.reduce(function(string, barcode) {
          return barcode.data
        }, "")
        this.updateBarcode(barcode)
      });
    });
  },
  methods: {
    updateBarcode(barcode) {
      console.log('test');
      this.$emit('updateBarcode', barcode)
    },
    ready() {
      this.$emit('scannerStarted')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
