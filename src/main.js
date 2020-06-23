import Vue from 'vue'
import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'
import qs from 'qs'

//设置跨域请求
axios.defaults.baseURL = "/api"

Vue.config.productionTip = true		//默认false
Vue.prototype.$axios = axios		//全局导入
//参数转换,让服务器可以接收到post请求参数
Vue.prototype.$qs = qs		//全局导入

new Vue({
  render: h => h("router-view"),
  router
}).$mount('#app')
