<template>
  <div>
    <FiltersForm v-if="hasActiveLayer" :layer="layer" />
  </div>
</template>

<script>
import FiltersForm from './FiltersForm'

export default {
  computed: {
    layer() {
      return this.$store.getters['workspace/activeLayer']
    },
    hasActiveLayer() {
      return this.layer !== undefined
    }
  },
  components: {
    FiltersForm
  }
}
</script>
