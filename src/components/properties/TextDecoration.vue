<template>
  <p class="text">Here's some text with text decoration</p>
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
.text {
  color: var(--clr-primary);
  font-weight: 600;
  text-decoration: v-bind(value);
  transition: var(--transition-duration) var(--transition-timing-function);
}
</style>
