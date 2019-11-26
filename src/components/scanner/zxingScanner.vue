<template lang="html">
  <div class="">
    <StreamBarcodeReader
      @decode="onDecode"
      @loaded="onLoaded"
    ></StreamBarcodeReader>
  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  name: 'zxingScanner',
  components: {
    StreamBarcodeReader,
  },
  methods: {
    onDecode(test) {
      console.log(test);
    },
    onLoaded(test) {
      console.log(test)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
