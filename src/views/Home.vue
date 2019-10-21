<template>
  <div class="home">
    <v-quagga v-if="show" :onDetected="logIt" :readerSize="readerSize" :readerTypes="['ean_reader', 'ean_8_reader', 'code_128_reader']"></v-quagga>
  </div>
</template>

<script>
import Vue from 'vue'
import VueQuagga from 'vue-quaggajs'

Vue.use(VueQuagga)

export default {
  name: 'home',
  data () {
    return {
      readerSize: {
        width: 1240,
        height: 680
      },
      detecteds: [],
      show: true
    }
  },
  methods: {
    logIt(data) {
        this.show = false
      // eslint-disable-next-line
      console.log(data.codeResult.code)
    }
  }
}
</script>
