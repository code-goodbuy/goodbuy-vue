import Vue from 'vue'
import Router from 'vue-router'

import IntroView from '@/components/intro/IntroView.vue'
import ScannerView from '@/components/scanner/ScannerView.vue'
import ProductView from '@/components/product/ProductView.vue'
import InstagramView from '@/components/instagram/InstagramView.vue'
import PageNotFound from '@/fallbacks/PageNotFound.vue'
import FeatureView from '@/components/feature/FeatureView.vue'
import TableView from '@/components/table/TableView.vue'
import login from '@/components/login/login.vue'
Vue.use(Router)

export const routes=[
    { path: "*", component: PageNotFound },
    { path: '/' , component: IntroView },
    { path: '/instant-feedback', name:'instant-feedback', component: ScannerView },
    { path: '/instant-feedback/:code', name:'product', component: ProductView },
    { path: '/instagram', name: 'instagram', component: InstagramView},
    { path: '/fridge-karma/result',name: 'result', component: TableView},
    { path: '/feature', name: 'feature', component: FeatureView},
    { path: '/fridge-karma', name:'fridge-karma', component: ScannerView},
    { path: '/login', name: 'login', component: login },
]

const router = new Router({
  mode: 'history',
  routes,
})

export default router
