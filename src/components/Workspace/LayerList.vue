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
					<span v-if="!layer.config.visible">-</span>
				</p>
				<button @click.stop="toggleLayerVisibility(index)">Hide</button>
				<button @click.stop="deleteLayer(index)">Delete</button>
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
		toggleLayerVisibility(index) {
			this.$store.commit('workspace/TOGGLE_LAYER_VISIBLITY', { index })
		},
		deleteLayer(index) {
			this.$store.commit('workspace/DELETE_LAYER', { index })
		}
	}
}
</script>
