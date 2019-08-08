<template>
  <div>
    <input 
      type="file"
      id="file-upload-input"
      @change="addUploadedImage"
      >
    <button @click="openFileExplorer">Upload Image</button>
    <button @click="addLogo">Logo</button>
    <button @click="addTextLayer">Text</button>
    <select @change="addTextLayer">
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
  methods: {
    makeNodeName() {
      return Math.random().toString(32).substring(2, 9)
    },
    openFileExplorer() {
      const fileInput = document.getElementById('file-upload-input')
      fileInput.click()
    },
    addUploadedImage(event) {
      const file = event.target.files[0]
      const reader = new FileReader(file)

      reader.onload = ((self) => {
        return (event) => {
          self.addImageLayer(event.target.result)
        }
      })(this)

      reader.readAsDataURL(file)
    },
    addLogo() {
      this.addImageLayer('http://placehold.it/150x75')
    },
    addImageLayer(src) {
      this.$store.commit('workspace/ADD_LAYER', {
        type: 'Image',
        src,
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

<style scoped>
#file-upload-input {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
}
</style>
