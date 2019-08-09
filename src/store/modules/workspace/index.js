import getters from './getters'
import mutations from './mutations'
export default {
	namespaced: true,
	state: {
		title: 'Untitled 1',
		pages: [
			{
				thumbnail: 'http://placehold.it/70x70',
				title: 'Page 1',
				isActive: true,
				layers: []
			},
			{
				thumbnail: 'http://placehold.it/70x70',
				title: 'Page 2',
				isActive: false,
				layers: []
			}
		]
	},
	getters,
	mutations
}
