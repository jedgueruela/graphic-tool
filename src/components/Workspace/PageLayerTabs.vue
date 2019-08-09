<template>
  <section class="tabs">
    <ul class="nav nav-tabs" id="page-layer-tabs" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#pages">Pages</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#layers">Layers</a>
      </li>
    </ul>
    <div class="tab-content" id="page-layer-tab-content">
      <div id="pages" class="tab-pane fade in active">
        <Pages />
      </div>
      <div id="layers" class="tab-pane fade">
        <Layers />
      </div>
    </div>
  </section>
</template>

<script>
import Layers from './Layers'
import Pages from './Pages'

export default {
  components: {
    Layers,
    Pages
  }
}
</script>

<style scoped>
.tabs {
  background: #343a40;
  bottom: 0;
  left: 0;
  position: fixed;
  top: 54px;
  width: 200px;
}
.nav-tabs {
  border: none;
}
.nav-item {
  width: 50%;
}
.nav-link {
  border: solid;
  border-radius: 0;
  border-width: 0 0 1px 0;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  transition: 0.4s;
}
.nav-link.active {
  background: none;
  color: white;
}
.tab-content {
  bottom: 0;
  left: 0;
  position: absolute;
  top: 40px;
  width: 100%;
}
.tab-pane {
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
