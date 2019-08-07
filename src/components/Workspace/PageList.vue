<template>
	<div>
		<ul>
		<li 
			v-for="(page, index) in pages"
			:key="index"
			@click="setActivePage(index)">
			{{ page.title }}
			<span v-if="page.isActive">*</span>
			<button v-if="manyPages" @click="deletePage($event, index)">Delete</button>
		</li>
	</ul>
	</div>
</template>

<script>
export default {
	props: ['pageList'],
	computed: {
		pages() {
			return this.pageList
		},
		manyPages() {
			return this.pages.length > 1
		}
	},
	methods: {
		setActivePage(index) {
			this.$store.commit('workspace/SET_ACTIVE_PAGE', { index })
		},
		deletePage(event, index) {
			event.stopPropagation()
			this.$store.commit('workspace/DELETE_PAGE', { index })
		}
	}
}	
</script>
