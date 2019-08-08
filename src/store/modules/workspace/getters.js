export default {
	pages(state) {
		return state.pages
	},
	activePage(state, getters) {
		return getters.pages.find(page => page.isActive === true)
	},
	activePageLayers(state, getters) {
		return getters.activePage.layers
	},
	activeLayer(state, getters) {
		return getters.activePageLayers.find(layer => layer.isActive === true)
	}
}
