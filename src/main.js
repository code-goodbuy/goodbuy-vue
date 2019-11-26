import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueInputAutowidth from 'vue-input-autowidth'

Vue.use(VueAxios, axios)
Vue.use(VueInputAutowidth)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
