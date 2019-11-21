import Vue from 'vue'
import Router from 'vue-router'

import IntroView from './components/intro/IntroView.vue'
import ScannerView from './components/scanner/ScannerView.vue'
import ProductView from './components/product/ProductView.vue'

Vue.use(Router)

export const routes=[
    { path: '/' , component: IntroView },
    { path: '/scanner', name:'scanner', component: ScannerView },
    { path: '/scanner/:code', name:'product-screen', component: ProductView },
]

const router = new Router({
  mode: 'hash',
  routes,
})

export default router
