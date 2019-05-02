import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import VueJsonp from 'vue-jsonp'

Vue.use(VueMaterial)
Vue.use(VueJsonp)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
