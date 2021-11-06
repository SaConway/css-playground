<template>
  <div class="layout">
    <side-bar />

    <router-view />

    <base-footer class="layout_footer" />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import BaseFooter from '@/components/Footer.vue'

export default {
  components: {
    SideBar,
    BaseFooter
  }
}
</script>

<style lang="scss">
@import '@/scss/global.scss';

.layout {
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto min-content;
}

.layout_footer {
  grid-column: 1 / -1;
}
</style>
