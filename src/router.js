import Vue from 'vue'
import Router from 'vue-router'

import WelcomeScreen from './components/welcome_screen/WelcomeScreen.vue'
import ScannerView from './components/scanner/ScannerView.vue'

Vue.use(Router)

export const routes=[
    { path: '' , component: WelcomeScreen },
    { path: '/scanner', name:'scanner', component: ScannerView }
]

const router = new Router({
  mode: 'history',
  routes,
})

export default router
