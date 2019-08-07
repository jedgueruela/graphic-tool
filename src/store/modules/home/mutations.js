export default {
	DELETE_WORKSPACE: (state, { index }) => {
		state.workspaces.splice(index, 1)
	}
}
