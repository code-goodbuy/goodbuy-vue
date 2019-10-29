<template>
  <div class="home">
    <v-quagga
        v-if="show"
        :disabled="!show"
        :onDetected="logIt"
        :readerSize="readerSize"
        :readerTypes="['ean_reader', 'ean_8_reader', 'code_128_reader']"
    />
    <button @click="back">Scan Again</button>
    <div v-if="isGood">
        <h1>
            This product is sustainable
        </h1>
        <img src="https://cdn-images.otto-office.com/oode/b2b/deu/mediadatacat/art/1200/OODE_ART_07/OODE_ART_07764GN_00.jpg">
    </div>
    <div v-if="isBad">
        <div>
            This product is shit
        </div>
        <img src="https://cdn-images.otto-office.com/oode/b2b/deu/mediadatacat/art/1200/OODE_ART_07/OODE_ART_07764BU_00.jpg">
    </div>
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
      show: true,
      goodList: ['4004675000446'],
      badList: ['4004675000439'],
      isGood: false,
      isBad: false
    }
  },
  methods: {
    logIt(data) {
        if (data.codeResult.code.length === 13) {
            this.show = false
            if (this.goodList.includes(data.codeResult.code)) {
                console.log('isGood')
                this.isGood = true
            } else if (this.badList.includes(data.codeResult.code)) {
                console.log('isBad')
                this.isBad = true
            }
            console.log(data.codeResult.code)
            }
    },
    back() {
        this.show = true
        this.isGood = false
        this.isBad = false
    }
  }
}
</script>
