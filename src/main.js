import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '@/styles/newScss.css'
import '@/icons/index.js'

gsap.registerPlugin(ScrollTrigger)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
