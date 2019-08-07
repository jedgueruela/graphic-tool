<template>
	<div>
		<PagePanel />
		<LayerList :layerList="layerList" />
	</div>
</template>

<script>
import PagePanel from './PagePanel'
import LayerList from './LayerList'

export default {
	components: {
		PagePanel,
		LayerList
	},
	computed: {
		layerList() {
			return this.$store.getters['workspace/activePageLayers']
		}
	}
}
</script>