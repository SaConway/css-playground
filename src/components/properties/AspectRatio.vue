<template>
  <img class="image" src="https://source.unsplash.com/random" />
</template>

<script>
// UTILS
import Properties from '@/utils/properties'

export default {
  name: Properties.ASPECT_RATIO.componentName,
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: calc(min(300px, 100%));
  aspect-ratio: v-bind(value);
  object-fit: cover;
  transition: aspect-ratio var(--transition-duration) var(--transition-timing-function);
  border-radius: var(--border-radius);
}
</style>
