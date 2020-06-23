import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import register from '../components/register.vue'
import main from '../components/main.vue'
import append from '../components/append.vue'
import change from '../components/change.vue'
import changepwd from '../components/changepwd.vue'

Vue.use(VueRouter)

var router = new VueRouter({
	routes:[
		{path:"/",component:login},
		{path:"/register",component:register},
		{path:"/main",component:main},
		{path:"/append",component:append},
		{path:"/change",component:change},
		{path:"/changepwd",component:changepwd}
	]
})

export default router