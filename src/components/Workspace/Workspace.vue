<template>
	<div>
		<Pages />
		<Layers />
		<Stage />
		<Filters />
	</div>
</template>

<script>
import Filters from './Filters'
import Layers from './Layers'
import Pages from './Pages'
import Stage from './Stage'

export default {
	components: {
		Filters,
		Layers,
		Pages,
		Stage
	}
}
</script>