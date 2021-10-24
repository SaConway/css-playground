<template>
  <img class="example" src="https://source.unsplash.com/random" />
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
  width: calc(min(300px, 100%));
  aspect-ratio: v-bind(value);
  object-fit: cover;
  transition: var(--transition-duration) var(--transition-timing-function);
}
</style>
