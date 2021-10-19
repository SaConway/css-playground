<template>
  <p class="text">Here's some text with text decoration</p>
</template>

<script>
// UTILS
import Properties from '@/utils/properties'

export default {
  name: Properties.TEXT_DECORATION.componentName,
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
  transition: text-decoration var(--transition-duration) var(--transition-timing-function);
}
</style>
