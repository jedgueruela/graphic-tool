<template>
	<section class="pages">
		<PageList :pageList="pageList" />
    <PageFooter />
	</section>
</template>

<script>
import PageList from './PageList'
import PageFooter from './PageFooter'

export default {
	components: {
		PageList,
    PageFooter
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

<style scoped>
.pages {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
