<template>
  <div class="example">I'm a box with a border-radius</div>
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
  width: fit-content;
  background-color: var(--clr-primary);
  color: var(--clr-base);
  padding: 8rem;
  border-radius: v-bind(value);
  text-align: center;
  transition: var(--transition-duration) var(--transition-timing-function);
}
</style>
