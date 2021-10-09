<template>
  <property-layout title="aspect-ratio: width / height;">
    <label>
      aspect-ratio:
      <base-input id="width" value="1" @input="imgWidth = $event.target.value" />
      /
      <base-input id="height" value="1" @input="imgHeight = $event.target.value" />
    </label>

    <img class="image" src="https://source.unsplash.com/random" />
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
  transition: aspect-ratio 300ms ease-in-out;
}
</style>
