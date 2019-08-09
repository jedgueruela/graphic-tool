<template>
  <fieldset>
    <template v-if="layer.type === 'Text'">
      <div class="form-group">
        <label for="text">Text</label>
        <textarea
          id="text"
          type="text"
          name="text"
          :value="layer.config.text"
          @input="updateLayer"
          ></textarea>
      </div>
      <div class="form-group">
        <label for="fill">Fill</label>
        <input
          id="fill"
          type="text"
          name="fill"
          :value="layer.config.fill"
          @input="updateLayer"
          >
      </div>
      <div class="form-group">
        <label for="fontSize">Font Size</label>
        <input
          id="fontSize"
          type="number"
          name="fontSize"
          :value="layer.config.fontSize"
          @input="updateLayer"
          >
      </div>
    </template>
    <template v-if="layer.type === 'Image'">
      <div class="form-group">
        <label for="height">Height</label>
        <input
          id="height"
          type="number"
          name="height"
          :value="layer.config.height"
          @input="updateLayer"
          >
      </div>
    </template>
    <div class="form-group">
      <label for="width">Width</label>
      <input
        id="width"
        type="number"
        name="width"
        :value="layer.config.width"
        @input="updateLayer"
        >
    </div>
    <div class="form-group">
      <label for="x">X</label>
      <input
        id="x"
        type="number"
        name="x"
        :value="layer.config.x"
        @input="updateLayer"
        >
    </div>
    <div class="form-group">
      <label for="y">Y</label>
      <input
        id="y"
        type="number"
        name="y"
        :value="layer.config.y"
        @input="updateLayer"
        >
    </div>
    <div class="form-group">
      <label for="scaleX">Scale X</label>
      <input
        id="scaleX"
        type="number"
        name="scaleX"
        :value="layer.config.scaleX"
        @input="updateLayer"
        >
    </div>
    <div class="form-group">
      <label for="scaleY">Scale Y</label>
      <input
        id="scaleY"
        type="number"
        name="scaleY"
        :value="layer.config.scaleY"
        @input="updateLayer"
        >
    </div>
    <div class="form-group">
      <label for="rotation">Rotation</label>
      <input
        id="rotation"
        type="number"
        name="rotation"
        :value="layer.config.rotation"
        @input="updateLayer"
        >
    </div>
  </fieldset>
</template>

<script>
export default {
  props: ['layer'],
  methods: {
    updateLayer({ target: { name, value }}) {
      const numberColumns = [
        'fontSize',
        'height',
        'width',
        'x',
        'y',
        'scaleX',
        'scaleY',
        'rotation'
      ]

      if (numberColumns.includes(name)) {
        value = formatNumber(Number(value))
      }

      const config = {
        [name]: value
      }

      this.$store.commit('workspace/UPDATE_ACTIVE_LAYER', { config })
    }
  }
}

function formatNumber(number) {
  return Number(number.toFixed(3))
}
</script>
