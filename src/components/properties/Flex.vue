<template>
  <div class="example">
    <div class="example_item" v-for="item of 5" :key="item"></div>
  </div>
</template>

<style lang="scss" scoped>
.example {
  width: 100%;
  height: 100%;
  min-height: 40rem;
  display: flex;
  transition: var(--transition-duration) var(--transition-timing-function);
}

.example_item {
  width: 5rem;
  aspect-ratio: 1;
  background-color: var(--clr-accent);
  border-radius: var(--border-radius);
}
</style>
