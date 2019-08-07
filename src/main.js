import Vue from 'vue'
// import VueKonva from 'vue-konva'
import { createStore } from './store'
import { createRouter } from './routes'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.use(VueKonva)

new Vue({
	router: createRouter(),
	store: createStore(),
  render: h => h(App)
}).$mount('#app')
