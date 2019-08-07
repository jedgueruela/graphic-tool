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
				layers: [
					{
						type: 'Image',
						src: 'http://placehold.it/150x150',
						isActive: false,
						isHidden: false
					},
					{
						type: 'Text',
						isActive: false,
						isHidden: false
					},
					{
						type: 'Text',
						isActive: false,
						isHidden: false
					}
				]
			},
			{
				thumbnail: 'http://placehold.it/70x70',
				title: 'Page 2',
				isActive: false,
				layers: [
					{
						type: 'Image',
						src: 'http://placehold.it/150x150',
						isActive: false,
						isHidden: false
					},
					{
						type: 'Image',
						src: 'http://placehold.it/150x150',
						isActive: false,
						isHidden: false
					}
				]
			}
		]
	},
	getters,
	mutations
}
