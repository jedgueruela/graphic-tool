<template>
  <div>
    <LayerList :layerList="layerList" />
  </div>
</template>

<script>
import LayerList from './LayerList'

export default {
  computed: {
    layerList() {
      return this.$store.getters['workspace/activePageLayers']
    }
  },
  components: {
    LayerList
  }
}
</script>