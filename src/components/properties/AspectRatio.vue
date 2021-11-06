<template>
  <img class="example" src="https://source.unsplash.com/random" />
</template>

<style lang="scss" scoped>
.example {
  width: calc(min(300px, 100%));
  object-fit: cover;
  transition: var(--transition-duration) var(--transition-timing-function);
}
</style>
