<template>
	<div>
		<PageList :pageList="pageList" />
		<button @click="addPage">Add New</button>
	</div>	
</template>

<script>
import PageList from './PageList'

export default {
	components: {
		PageList
	},
	computed: {
		pageList() {
			return this.$store.getters['workspace/pages']
		}
	},
	methods: {
		addPage() {
			this.$store.commit('workspace/ADD_PAGE')
		}
	}
}
</script>
