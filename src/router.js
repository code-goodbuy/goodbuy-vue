import Vue from 'vue'
import Router from 'vue-router'

import IntroView from '@/components/intro/IntroView.vue'
import ScannerView from '@/components/scanner/ScannerView.vue'
import ProductView from '@/components/product/ProductView.vue'
import InstagramView from '@/components/redirect/InstagramView.vue'

Vue.use(Router)

export const routes=[
    { path: '/' , component: IntroView },
    { path: '/scanner', name:'scanner', component: ScannerView },
    { path: '/scanner/:code', name:'product', component: ProductView },
    { path: '/instagram', name: 'instagram', component: InstagramView}
]

const router = new Router({
  mode: 'hash',
  routes,
})

export default router
