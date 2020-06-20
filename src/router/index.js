import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'

Vue.use(VueRouter)

var router = new VueRouter({
	routes:[
		{path:"/",component:login}
	]
})

export default router