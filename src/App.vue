<template>
  <div class="layout">
    <side-bar />

    <router-view />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'

export default {
  components: {
    SideBar
  }
}
</script>

<style lang="scss">
@import '@/scss/global.scss';

.layout {
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>
