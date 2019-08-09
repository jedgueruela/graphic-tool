<template>
	<div class="home-view">
		<Navbar />
		<main role="main">
			<div class="container-fluid">
				<WorkspaceList :workspaceList="workspaceList" />
			</div>
		</main>
	</div>
</template>

<script>
import { Navbar, WorkspaceList } from '../components/Home'

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