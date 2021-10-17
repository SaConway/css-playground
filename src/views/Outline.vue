<template>
  <property-layout :property="property" @change="value = $event">
    <template #output>
      <div class="box">I'm a box with an outline</div>
    </template>
  </property-layout>
</template>

<script>
// UTILS
import Properties from '@/utils/properties'

// COMPONENT
import PropertyLayout from '@/components/PropertyLayout'

export default {
  name: Properties.OUTLINE.componentName,
  components: { PropertyLayout },
  data() {
    return {
      property: Properties.OUTLINE,
      value: Properties.OUTLINE.initialValue
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
