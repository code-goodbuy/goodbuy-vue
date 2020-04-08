import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barcode: '',
    multipleBarcodes: new Set([]),
    blacklist: [],
  },
  mutations: {
    updateBarcode (state, barcode) {
      state.barcode = barcode
    },
    resetBarcode (state) {
      state.barcode = ''
    },
    updateMultipleBarcodes (state, multipleBarcodes){
      state.multipleBarcodes.add(multipleBarcodes)
    },
    resetMultipleBarcodes (state) {
      state.multipleBarcodes = new Set([])

    },
    updateBlacklist (state, selectedCorporations) {
      state.blacklist =  selectedCorporations
    },
  },
  actions: {

  },
})
