<template>
	<div>
		<PagesPanel />
		<LayersPanel />
		<Stage />
	</div>
</template>

<script>
import PagesPanel from './PagesPanel'
import LayersPanel from './LayersPanel'
import Stage from './Stage'

export default {
	components: {
		PagesPanel,
		LayersPanel,
		Stage
	}
}
</script>