<template>
	<div class="home">
		<Navbar />
		<main role="main">
			<b-container fluid>
				<WorkspaceList :workspaceList="workspaceList" />
			</b-container>
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