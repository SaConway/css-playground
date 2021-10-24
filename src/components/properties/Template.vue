<template>
  <div class="example"></div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.example {
  transition: var(--transition-duration) var(--transition-timing-function);
}
</style>
