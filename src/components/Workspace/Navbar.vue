<template>
	<nav role="navigation">
		<input type="text" name="title" v-model="title">
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
