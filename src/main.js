import Vue from 'vue'
import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false

new Vue({
  render: h => h("router-view"),
  router
}).$mount('#app')
