<template>
	<draggable 
			tag="ul"
			group="layers"
			v-model="layers"
			@start="drag=true"
			@end="drag=false"
			>
			<li
				v-for="(layer, index) in layers"
				:key="index"
				@click="setLayerActive(index)"
				>
				<p>
					{{ layer.type }}
					<span v-if="layer.isActive">*</span>
					<span v-if="layer.isHidden">-</span>
				</p>
				<button @click="toggleHideLayer($event, index)">Hide</button>
				<button @click="deleteLayer($event, index)">Delete</button>
			</li>
		</draggable>
</template>

<script>
import draggable from 'vuedraggable'

export default {
	props: ['layerList'],
	components: {
		draggable
	},
	computed: {
		layers: {
			get() {
				return this.layerList
			},
			set(layers) {
				this.$store.commit('workspace/SORT_LAYERS', { layers })
			}
		}
	},
	methods: {
		setLayerActive(index) {
			this.$store.commit('workspace/SET_ACTIVE_LAYER', { index })
		},
		toggleHideLayer(event, index) {
			event.stopPropagation()
			this.$store.commit('workspace/TOGGLE_HIDE_LAYER', { index })
		},
		deleteLayer(event, index) {
			event.stopPropagation()
			this.$store.commit('workspace/DELETE_LAYER', { index })
		}
	}
}
</script>