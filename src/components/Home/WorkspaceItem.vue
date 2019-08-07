<template>
	<article class="workspaceItem">
		<router-link :to="{ name: 'workspace', params: { id: workspace.id } }">
			<img :src="workspace.thumbnail_url" alt="Preview thumbnail">
		</router-link>
		<span>{{ workspace.title }}</span>
		<button @click="deleteWorkspace(index)">Delete</button>
	</article>
</template>

<script>
export default {
	props: ['workspace', 'index'],
	methods: {
		deleteWorkspace(index) {
			this.$store.commit('home/DELETE_WORKSPACE', { index })
		}
	}
}
</script>