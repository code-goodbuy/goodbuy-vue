import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barcode: '',
  },
  mutations: {
    updateBarcode (state, barcode) {
      state.barcode = barcode
    },
    resetBarcode (state) {
      state.barcode = ''
    },
  },
  actions: {

  }
})
