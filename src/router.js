import Vue from 'vue'
import Router from 'vue-router'

import WelcomeScreen from './components/welcome_screen/WelcomeScreen.vue'
import ScannerView from './components/scanner/ScannerView.vue'
import ProductScreen from './components/product_screen/ProductScreen.vue'
import ProductInfo from './components/product_info/ProductInfo.vue'

Vue.use(Router)

export const routes=[
    { path: '/' , component: WelcomeScreen },
    { path: '/scanner', name:'scanner', component: ScannerView },
    { path: '/scanner/:code', name:'product-screen', component: ProductScreen },
    { path: '/scanner/:code/info', name:'product-info', component: ProductInfo },
]

const router = new Router({
  mode: 'hash',
  routes,
})

export default router
