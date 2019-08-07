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
						config: {
							draggable: true,
							image: null,
							name: 'Image-1',
							rotation: 0,
							scaleX: 1,
							scaleY: 1,
							visible: true,
							x: 0,
							y: 0,
							width: 150
						}
					},
					{
						type: 'Text',
						isActive: false,
						config: {
							draggable: true,
							fill: '#000',
							fontSize: 20,
							name: 'Text-1',
							rotation: 0,
							scaleX: 1,
							scaleY: 1,
							text: 'Enter text here',
							visible: true,
							x: 0,
							y: 0,
							width: 150
						}
					},
					{
						type: 'Text',
						isActive: false,
						config: {
							draggable: true,
							fill: '#000',
							fontSize: 20,
							name: 'Text-2',
							rotation: 0,
							scaleX: 1,
							scaleY: 1,
							text: 'Enter text here',
							visible: true,
							x: 0,
							y: 0,
							width: 150
						}
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
						config: {
							draggable: true,
							image: null,
							name: 'Image-1',
							rotation: 0,
							scaleX: 1,
							scaleY: 1,
							visible: true,
							x: 0,
							y: 0,
							width: 150
						}
					},
					{
						type: 'Image',
						src: 'http://placehold.it/150x150',
						isActive: false,
						config: {
							draggable: true,
							image: null,
							name: 'Image-2',
							rotation: 0,
							scaleX: 1,
							scaleY: 1,
							visible: true,
							x: 0,
							y: 0,
							width: 150
						}
					}
				]
			}
		]
	},
	getters,
	mutations
}
