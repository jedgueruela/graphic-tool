<template>
	<div>
		<Navbar />
		<Workspace />
	</div>
</template>

<script>
import Navbar from './Navbar.vue'
import Workspace from './Workspace.vue'

export default {
	components: {
		Navbar,
		Workspace
	}
}
</script>

// a button to save the state of the workspace (circle back to this)
