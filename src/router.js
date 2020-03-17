import Vue from 'vue'
import Router from 'vue-router'

import IntroView from '@/components/intro/IntroView.vue'
import ScannerView from '@/components/scanner/ScannerView.vue'
import ProductView from '@/components/product/ProductView.vue'
import InstagramView from '@/components/instagram/InstagramView.vue'
import PageNotFound from '@/fallbacks/PageNotFound.vue'
import FeatureView from '@/components/feature/FeatureView.vue'

Vue.use(Router)

export const routes=[
    { path: "*", component: PageNotFound },
    { path: '/' , component: IntroView },
    { path: '/instant-feedback', name:'instant-feedback', component: ScannerView },
    { path: '/instant-feedback/:code', name:'product', component: ProductView },
    { path: '/instagram', name: 'instagram', component: InstagramView},
    { path: '/feature', name: 'feature', component: FeatureView},
    { path: '/fridge-karma', name:'fridge-karma', component: ScannerView},

]

const router = new Router({
  mode: 'hash',
  routes,
})

export default router
