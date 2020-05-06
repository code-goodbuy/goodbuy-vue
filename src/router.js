import Vue from 'vue'
import Router from 'vue-router'

import IntroView from '@/components/intro/IntroView.vue'
import FeatureView from '@/components/feature/FeatureView.vue'
import { authGuard } from "./auth/authGuard";


Vue.use(Router)

export const routes=[
    { path: '/' , component: IntroView },
    { path: '/feature', name: 'feature', component: FeatureView },
    { path: '/instant-feedback', name:'instant-feedback', component: () => import(/* webpackChunkName: "ScannerView" */ '@/components/scanner/ScannerView.vue') },
    { path: '/instant-feedback/:code', name:'product', component: () => import(/* webpackChunkName: "ProductView" */ '@/components/product/ProductView.vue') },
    { path: '/fridge-karma', name:'fridge-karma',  component: () => import(/* webpackChunkName: "ScannerView" */ '@/components/scanner/ScannerView.vue') },
    { path: '/fridge-karma/result',name: 'result', component: () => import(/* webpackChunkName: "TableView" */ '@/components/table/TableView.vue') },
    { path: '/profile', name: 'profile', component: () => import(/* webpackChunkName: "Profile" */ '@/components/profile/Profile.vue'),  beforeEnter: authGuard },
    { path: '/blacklist-tutorial', name: 'blacklist-tutorial', component: () => import(/* webpackChunkName: "BlacklistTutorial" */ '@/components/blacklist/BlacklistTutorialIntroduction.vue') },
    { path: '/blacklist', name:'blacklist', component: () => import(/* webpackChunkName: "Blacklist" */ '@/components/blacklist/Blacklist.vue') },
    { path: '/instagram', name: 'instagram', component: () => import(/* webpackChunkName: "InstagramView" */ '@/components/instagram/InstagramView.vue') },
    { path: "*", component: () => import(/* webpackChunkName: "PageNotFound" */ '@/fallbacks/PageNotFound.vue') },

]

const router = new Router({
  mode: 'history',
  routes,
})

export default router
