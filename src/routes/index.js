import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Workspace from '../views/Workspace'

Vue.use(VueRouter)

export function createRouter() {
	return new VueRouter({
		mode: 'history',
		routes: [
			{
				component: Home,
				path: '/'
			},
			{
				component: Workspace,
				name: 'workspace',
				path: '/workspace/:id'
			}
		]
	})
}
