<template>
	<nav class="navbar navbar-expand-sm bg-light" role="navigation">
    <a class="navbar-brand" href="javascript:void(0)">Graphic Tool v1</a>
    <router-link :to="{ name: 'workspace', params: { id: uuidv4() } }">
      Create Workspace
    </router-link>
	</nav>
</template>

<script>
export default {
  methods: {
    uuidv4() {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      )
    }
  }
}
</script>
