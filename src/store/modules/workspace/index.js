import getters from './getters'
import mutations from './mutations'

export default {
	namespaced: true,
	state: {
		title: 'Untitled',
		pages: [
      {
        title: 'Untitled',
        isActive: true,
        layers: []
      }
    ]
	},
	getters,
	mutations
}
