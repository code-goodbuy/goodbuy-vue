import Vue from 'vue'
import Router from 'vue-router'

import WelcomeScreen from './components/welcome_screen/WelcomeScreen.vue'
import ScannerView from './components/scanner/ScannerView.vue'
import ProductScreen from './components/product_info/ProductScreen.vue'

Vue.use(Router)

export const routes=[
    { path: '/' , component: WelcomeScreen },
    { path: '/scanner', name:'scanner', component: ScannerView },
    { path: '/scanner/:code', name:'product-info', component: ProductScreen }
]

const router = new Router({
  mode: 'hash',
  routes,
})

export default router
