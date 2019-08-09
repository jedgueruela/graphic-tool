<template>
  <footer class="pages-footer">
    <PageCreateButton />
  </footer>
</template>

<script>
import PageCreateButton from './PageCreateButton'

export default {
  components: {
    PageCreateButton
  }
}
</script>

<style scoped>
.pages-footer {
  bottom: 0;
  position: absolute;
  width: 100%;
}
</style>
