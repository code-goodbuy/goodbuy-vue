<template>
  <div class="scanner">
    <div ref="quagga" class="viewport">
      <video :style="`height: ${$vssHeight}px;`" />
    </div>
  </div>
</template>

<script>
import Quagga from 'quagga'
import VueScreenSize from 'vue-screen-size'

export default {
  name: 'Scanner',
  mixins: [VueScreenSize.VueScreenSizeMixin],
  data() {
    return {
      results: []
    }
  },
  watch: {
    $vssWidth() {
      this.initScanner()
    },
    $vssHeight() {
      this.initScanner()
    }
  },
  mounted () {
    this.initScanner()
  },
  methods: {
    initScanner() {
      this.$nextTick(() => {
        Quagga.init({
          locate: true,
          inputStream : {
            name : "Live",
            type : "LiveStream",
            target: this.$refs.quagga,
            constraints: {
              width: this.$vssWidth,
              height: this.$vssHeight,
              facingMode: "environment", // or user
              aspectRatio: { min: 1, max: parseFloat(this.$vssHeight/this.$vssWidth) },
            },
            area: { // defines rectangle of the detection/localization area
              top: "0%",    // top offset
              right: "0%",  // right offset
              left: "0%",   // left offset
              bottom: "0%"  // bottom offset
            },
          },
          decoder : {
            readers : ['ean_reader'],
          },
          multiple: true,
          locator: {
            halfSample: true,
            patchSize: "x-large"
          }
        },
        () => this.start())
      })
    },
    start() {
      Quagga.onDetected(this.onDetected)
      Quagga.onProcessed(this.onProcessed)
      Quagga.start()
      this.$emit('scannerStarted')
    },
    onProcessed() {
      const drawingCanvas = Quagga.canvas.dom.overlay;
      drawingCanvas.style.display = 'none';
    },
    onDetected(data) {
      let code = data.codeResult.code
      console.log(code);
      if (code.length === 13) {
        this.results.push(code)
      }
      if (this.results.length > 5) {
        this.$emit('updateBarcode', this.findMost(this.results))
        this.results = []
      }
    },
    stop() {
      Quagga.offDetected(this.onDetected)
      Quagga.stop()
      this.$refs.quagga.querySelector('video').remove()
      this.$refs.quagga.querySelector('canvas').remove()
    },
    findMost(numbers) {
      let counted = numbers.reduce((acc, curr) => {
        if (curr in acc) {
            acc[curr]++;
        } else {
            acc[curr] = 1;
        }
        return acc;
      }, {});
      let mode = Object.keys(counted).reduce((a, b) => counted[a] > counted[b] ? a : b);
      return mode;
    }
  }
}
</script>

<style lang="scss">
.scanner {
  overflow: hidden;
}
</style>
