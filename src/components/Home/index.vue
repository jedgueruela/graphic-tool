<template>
	<div>
		<Navbar />
		<WorkspaceList :workspaceList="workspaceList" />
	</div>
</template>

<script>
import Navbar from './Navbar'
import WorkspaceList from './WorkspaceList'

export default {
	components: {
		Navbar,
		WorkspaceList
	},
	computed: {
		workspaceList() {
			return this.$store.getters['home/workspaces']
		}
	}
}
</script>