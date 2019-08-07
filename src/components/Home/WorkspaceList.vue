<template>
	<section class="workspaceList">
		<WorkspaceItem
			v-for="(workspace, index) in workspaces"
			:workspace="workspace"
			:index="index"
			:key="index"
			/>
	</section>
</template>

<script>
import WorkspaceItem from './WorkspaceItem'

export default {
	props: ['workspaceList'],
	computed: {
		workspaces() {
			return this.workspaceList
		}
	},
	components: {
		WorkspaceItem
	},
}
</script>
