<template>
	<nav class="navbar navbar-expand-sm bg-light" role="navigation">
    <div class="container-fluid">
      <label for="workspace-title" class="sr-only">Workspace Title</label>
      <input id="workspace-title" type="text" name="title" v-model="title">
      <button class="btn btn-primary">Save Workspace</button>
    </div>
  </nav>
</template>

<script>
export default {
	computed: {
		title: {
			get() {
				return this.$store.state.workspace.title
			},
			set(title) {
				this.$store.commit('workspace/SET_TITLE', { title })
			}
		}
	},
}
</script>

<style scoped>
#workspace-title {
  background: #f5f5f5;
  border: navajowhite;
  height: 38px;
  outline: none;
  padding-left: 15px;
  padding-right: 15px;
  transition: 0.4s;
}
#workspace-title:focus {
  background: #efefef;  
}
</style>
