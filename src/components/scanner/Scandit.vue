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
    const LICENSE_KEY = 'AZwtBDDeLa8GPRZJUyYeTRMUA7aaAIqzkmQrf2dCMYnzSuW4QiNbKvBui1WAKOsckDfRvCI6YHF/cn3jT3ELW6NhmRgaY+3Tp2QWAutX06K/D607GFY1T35G6U0zZqUT2QyZcF4FLgvtH01dultwgvTGOer3q42r1/qvpVFHmMicd+gLVM5bXbAzE9HuQcaCHNSWK88rGkYOdJZe0FsDAJj+oGZXWblZYmlEjB9NmyL6XUSV5TgMvlC/CnErBlVrYbRXSyo8kExHumnZ7yn6yXf57QbwQa+9OR6ZAqUKZdO2nqEbyeWAIgao+m3BvS0/TvOB01XJL5tu3FBgkuVIMx8CEJzSrJRjaGZUUVGh5IvIX2FmvG/ESeB39aSOBAiHLu2opKxaPz21IsZGJXp8BB/43nuUNfAa0VAyX/5kAaz4wXJeYyDRwZShTXYA4LpOrSkzkM6K4GhA+ETtGliieKeQ4GgYAffsU0k0dbg/YyY3UDMmSEcjfZtpLpbWkQ059uriuLXuLwTFlJtNokJb1k4a4vzp9iMM2RcGhkG9nVF5KDnAIQ9qhmh4Gp3YTXA71xSGYWnYbCnie+yIPJdJqkreabBH1uaIudvDa2mG2r1z7PHIuQp5kb5kMdwN2wzhO0vMXNzcar++VmhE1JpEJrB83mT+zR0TOyaQMmofSEc0cBRv9sq1x/LBKkMYPdmyDE0DXLs4hOem2eAG9uKNz3QJD1TRE2Iky7uf94EIeeqRfmbeyLiQnmtLFiw6dl0+N9v5SweiW4bZ7OEvV0MLUV4E1ICeEVQScfjV7v/FE9k6LfQUYZODRQt2AQ=='
    const engineLocation = "https://unpkg.com/scandit-sdk/build"
    ScanditSDK.configure(LICENSE_KEY, { engineLocation: engineLocation });
    ScanditSDK.BarcodePicker.create(document.getElementById("scandit-barcode-picker"), {
      enablePinchToZoom: false,
      enableCameraSwitcher: false,
      enableTorchToggle: true,
      guiStyle: null,
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
