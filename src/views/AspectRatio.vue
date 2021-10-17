<template>
  <property-layout :property="property" @change="value = $event">
    <template #output>
      <img class="image" src="https://source.unsplash.com/random" />
    </template>
  </property-layout>
</template>

<script>
// UTILS
import Properties from '@/utils/properties'

// COMPONENTS
import PropertyLayout from '@/components/PropertyLayout'

export default {
  name: Properties.ASPECT_RATIO.componentName,
  components: { PropertyLayout },
  data() {
    return {
      property: Properties.ASPECT_RATIO,
      value: Properties.ASPECT_RATIO.initialValue
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
