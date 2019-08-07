<template>
  <div>
    <button @click="addImageLayer">Logo</button>
    <button @click="addTextLayer">Text</button>
    <select @change="addTextLayer($event)">
      <option value="">Insert tag</option>
      <option value="|COMPANY_NAME|">Name</option>
      <option value="|COMPANY_ADDRESS|">Address</option>
      <option value="|COMPANY_EMAIL|">Email</option>
      <option value="|COMPANY_PHONE|">Phone Number</option>
      <option value="|COMPANY_WEBSITE|">Website</option>
    </select>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     selectKey: ''
  //   }
  // },
  methods: {
    makeNodeName() {
      return Math.random().toString(32).substring(2, 9)
    },
    addImageLayer() {
      let src = 'http://placehold.it/150x75'
      let image = new Image
      image.src = src
      image.onload = () => {
        this.$store.commit('workspace/ADD_LAYER', {
          type: 'Image',
          src: 'http://placehold.it/150x150',
          isActive: false,
          config: {
            draggable: true,
            image: null,
            name: this.makeNodeName(),
            rotation: 0,
            scaleX: 1,
            scaleY: 1,
            visible: true,
            x: 0,
            y: 0,
            width: 150
          }
        })
      }
    },
    addTextLayer(event) {
      let text = event.target.value || 'Enter your text here'
      this.$store.commit('workspace/ADD_LAYER', {
        type: 'Text',
        isActive: false,
        config: {
          draggable: true,
          fill: '#000',
          fontSize: 20,
          name: this.makeNodeName(),
          rotation: 0,
          scaleX: 1,
          scaleY: 1,
          text,
          visible: true,
          x: 0,
          y: 0,
          width: 150
        }
      })
    },
  }
}
</script>
