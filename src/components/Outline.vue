<template>
  <div class="box">I'm a box with an outline</div>
</template>

<script>
// UTILS
import Properties from '@/utils/properties'

export default {
  name: Properties.OUTLINE.componentName,
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  background-color: var(--clr-primary);
  color: var(--clr-base);
  padding: 5rem;
  outline: v-bind(value);
  border-radius: var(--border-radius);
  text-align: center;
  transition: outline var(--transition-duration) var(--transition-timing-function);
}
</style>
