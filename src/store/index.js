import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import home from './modules/home'
import workspace from './modules/workspace'

Vue.use(Vuex)

export function createStore() {
	return new Vuex.Store({
		modules: {
			home,
			workspace
		}
	})
}
