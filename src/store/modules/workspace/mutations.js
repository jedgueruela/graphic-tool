export default {
	SET_TITLE: (state, { title }) => {
		state.title = title
	},

	ADD_PAGE: (state) => {
		state.pages.push({
			thumbnail: 'http://placehold.it/70x70',
			title: 'New Page',
			isActive: true,
			layers: []
		})

		activePage(state).isActive = false
	},

	DELETE_PAGE: (state, { index }) => {
		const pages = state.pages
		const isActive = pages[index].isActive
		
		if (isActive) {
			if (index > 0) {
				pages[index - 1].isActive = true
			} else {
				pages[index + 1].isActive = true
			}
		}

		pages.splice(index, 1)
	},

	SET_ACTIVE_PAGE: (state, { index }) => {
		activePage(state).isActive = false
		state.pages[index].isActive = true
	},

	SET_ACTIVE_LAYER: (state, { index }) => {
		const currentActiveLayer = activeLayer(state)

		if (currentActiveLayer !== undefined) {
			currentActiveLayer.isActive = false
		}

		activePageLayers(state)[index].isActive = true
	},

	SORT_LAYERS: (state, { layers }) => {
		activePage(state).layers = layers
	},

	TOGGLE_HIDE_LAYER: (state, { index }) => {
		const layer = activePageLayers(state)[index]
		layer.isHidden = !layer.isHidden
	},

	DELETE_LAYER: (state, { index }) => {
		activePageLayers(state).splice(index, 1)
	}
}

function activePage(state) {
	return state.pages.find(page => page.isActive === true)
}

function activePageLayers(state) {
	return activePage(state).layers
}

function activeLayer(state) {
	return activePageLayers(state).find(layer => layer.isActive === true)
}
