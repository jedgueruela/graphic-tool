import Vue from 'vue'
import VueKonva from 'vue-konva'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import { createStore } from './store'
import { createRouter } from './routes'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueKonva)
// Vue.use(BootstrapVue)

new Vue({
	router: createRouter(),
	store: createStore(),
  render: h => h(App)
}).$mount('#app')
