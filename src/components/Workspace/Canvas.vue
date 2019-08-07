<template>
  <div style="border: 1px solid">
    <v-stage
      ref="stage"
      :config="stageConfig"
      @mousedown="handleStageMouseDown"
      >
      <v-layer ref="layer">
        <template v-for="(layer, index) in layers">
          <v-image
            v-if="layer.type === 'Image'"
            :config="layer.config"
            :key="index"
            @click="setLayerActive(index)"
            @dragstart="dragStart"
            @dragend="dragEnd"
            @transformend="transformEnd"
            />
          <v-text
            v-else
            :config="layer.config"
            :key="index"
            @click="setLayerActive(index)"
            @dragstart="dragStart"
            @dragend="dragEnd"
            @transformend="transformEnd"
            />
        </template>
        <v-transformer ref="transformer" />
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stageConfig: {
        height: 450,
        width: 450
      }
    }
  },
  props: ['layerList'],
  computed: {
    layers() {
      const layers = this.layerList

      for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === 'Image') {
          let image = new Image
          image.src = layers[i].src
          image.onload = () => layers[i].config.image = image
        }
      }

      return layers
    }
  },
  methods: {
    activateLayer(index) {
      this.$store.commit('workspace/SET_ACTIVE_LAYER', { index })
    },
    setLayerActive(index) {
      this.activateLayer(index)
    },
    dragStart({ target: { index } }) {
      this.activateLayer(index)
    },
    dragEnd({ target }) {
      const config = {
        x: target.x(),
        y: target.y(),
      }

      const index = target.index

      this.$store.commit('workspace/UPDATE_LAYER', { config, index })
    },
    transformEnd({ target }) {
      const config = {
        rotation: target.rotation(),
        scaleX: target.scaleX(),
        scaleY: target.scaleY(),
      }

      const index = target.index

      this.$store.commit('workspace/UPDATE_LAYER', { config, index })
    },
    handleStageMouseDown({ target }) {
      // clicked on stage - clear selection
      if (target === target.getStage()) {
        this.selectedLayerName = ''
        this.updateTransformer()
        return
      }

      // clicked on transformer - do nothing
      const clickedOnTransformer = target.getParent().className === 'Transformer'
      if (clickedOnTransformer) {
        return
      }

      // find clicked layer by its name
      const name = target.name()
      const layer = this.layers.find(r => r.config.name === name)
      if (layer) {
        this.selectedLayerName = name
      } else {
        this.selectedLayerName = ''
      }
      this.updateTransformer()
    },
    updateTransformer() {
      // here we need to manually attach or detach Transformer node
      const transformerNode = this.$refs.transformer.getStage()
      const stage = transformerNode.getStage()
      const { selectedLayerName } = this

      const selectedNode = stage.findOne('.' + selectedLayerName)
      // do nothing if selected node is already attached
      if (selectedNode === transformerNode.node()) {
        return
      }

      if (selectedNode) {
        // attach to another node
        transformerNode.attachTo(selectedNode)
      } else {
        // remove transformer
        transformerNode.detach()
      }
      transformerNode.getLayer().batchDraw()
    },
  }
}
</script>
