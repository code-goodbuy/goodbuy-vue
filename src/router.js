import Vue from 'vue'
import Router from 'vue-router'

import WelcomeScreen from './components/welcome_screen/WelcomeScreen.vue'
import ScannerView from './components/scanner/ScannerView.vue'
import ProductFeedback from './components/product_screen/ProductFeedback.vue'

Vue.use(Router)

export const routes=[
    { path: '/' , component: WelcomeScreen },
    { path: '/scanner', name:'scanner', component: ScannerView },
    { path: '/scanner/:code', name:'product-screen', component: ProductFeedback },
]

const router = new Router({
  mode: 'hash',
  routes,
})

export default router
