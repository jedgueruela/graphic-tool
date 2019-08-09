<template>
  <div class="workspace-view">
    <Navbar />
    <PageLayerTabs />
  </div>
</template>

<script>
import { Navbar, PageLayerTabs } from '../components/Workspace'

export default {
  components: {
    Navbar,
    PageLayerTabs
  }
}
</script>
