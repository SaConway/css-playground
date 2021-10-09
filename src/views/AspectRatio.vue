<template>
  <property-layout name="aspect-ratio" syntax="width / height">
    <template #property_input>
      <base-input id="width" value="1" @input="imgWidth = $event.target.value" />
      <span>/</span>
      <base-input id="height" value="1" @input="imgHeight = $event.target.value" />
    </template>

    <template #property_output>
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
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: calc(min(300px, 100%));
  aspect-ratio: calc(v-bind(imgWidth) / v-bind(imgHeight));
  object-fit: cover;
  transition: aspect-ratio var(--transition-duration) var(--transition-timing-function);
}
</style>
