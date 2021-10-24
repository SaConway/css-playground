<template>
  <div class="example">I'm a box with an outline</div>
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
  background-color: var(--clr-primary);
  color: var(--clr-base);
  padding: 5rem;
  outline: v-bind(value);
  border-radius: var(--border-radius);
  text-align: center;
  transition: var(--transition-duration) var(--transition-timing-function);
}
</style>
