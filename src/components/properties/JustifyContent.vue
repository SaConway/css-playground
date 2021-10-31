<template>
  <div class="example">
    <div class="example_item" v-for="item of 5" :key="item"></div>
  </div>
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
  display: flex;
  justify-content: v-bind(value);
  gap: 1rem;
  padding: 2rem;
  border: 1px solid var(--clr-accent);
  border-radius: var(--border-radius);
  transition: var(--transition-duration) var(--transition-timing-function);
}

.example_item {
  width: 5rem;
  aspect-ratio: 1 / 2;
  background-color: var(--clr-primary);
  border-radius: var(--border-radius);
}
</style>
