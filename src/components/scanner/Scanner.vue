<template>
  <div class="scanner">
    <div ref="quagga" class="viewport" />
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
          locate: false,
          inputStream : {
            name : "Live",
            type : "LiveStream",
            target: this.$refs.quagga,
            constraints: {
              width: this.$vssWidth,
              height: this.$vssHeight,
              facingMode: "environment" // or user
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
      console.log('Quagga started!')
    },
    onProcessed() {
      const drawingCanvas = Quagga.canvas.dom.overlay;
      drawingCanvas.style.display = 'none';
    },
    onDetected(data) {
      let code = data.codeResult.code
      if (code.length === 13) {
        this.results.push(code)
      }
      if (this.results.length > 10) {
        this.$emit('updateBarcode', this.getBarcode())
        this.results = []
      }
    },
    stop() {
      Quagga.offDetected(this.onDetected)
      Quagga.stop()
      this.$refs.quagga.querySelector('video').remove()
      this.$refs.quagga.querySelector('canvas').remove()
    },
    getBarcode() {
      return this.findMost(this.results)
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
    },
  }
}
</script>
