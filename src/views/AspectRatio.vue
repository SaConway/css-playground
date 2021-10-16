<template>
  <property-layout :name="key" syntax="width / height" :declaration="declaration">
    <template #input>
      <!-- WIDTH -->
      <base-input id="width" type="number" value="1" label="width:" @input="imgWidth = $event" />

      <!-- HEIGHT -->
      <base-input id="height" type="number" value="1" label="height:" @input="imgHeight = $event" />
    </template>

    <template #output>
      <img class="image" src="https://source.unsplash.com/random" />
    </template>
  </property-layout>
</template>

<script>
import PropertyLayout from '@/components/PropertyLayout.vue'
import BaseInput from '@/components/BaseInput.vue'

export default {
  name: 'AspectRatio',
  components: { PropertyLayout, BaseInput },
  data() {
    return {
      imgWidth: '1',
      imgHeight: '1'
    }
  },
  computed: {
    declaration() {
      return `${this.key}: ${this.value};`
    },
    key() {
      return 'aspect-ratio'
    },
    value() {
      return `${this.imgWidth} / ${this.imgHeight}`
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
