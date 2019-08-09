import getters from './getters'
import mutations from './mutations'

export default {
	namespaced: true,
	state: {
		workspaces: [
			{
				id: 1,
				title: 'Untitled 1',
				thumbnail_url: 'http://placehold.it/300x300',
			},
			{
				id: 2,
				title: 'Untitled 2',
				thumbnail_url: 'http://placehold.it/300x300',
			},
			{
				id: 3,
				title: 'Untitled 3',
				thumbnail_url: 'http://placehold.it/300x300',
			}
		]
	},
	getters,
	mutations
}
