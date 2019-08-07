<template>
  <div>
    <Toolbar />
    <Canvas :layerList="layerList" />
  </div>  
</template>

<script>
import Canvas from './Canvas'
import Toolbar from './Toolbar'

export default {
  computed: {
    layerList() {
      return this.$store.getters['workspace/activePageLayers']
    }
  },
  components: {
    Canvas,
    Toolbar
  }
}
</script>
