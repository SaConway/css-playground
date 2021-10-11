<template>
  <property-layout name="outline" syntax="outline-color outline-style outline-width">
    <template #property_input>
      <label>
        outline-color:
        <base-input id="color" :value="outlineClr" @input="outlineClr = $event.target.value" />
      </label>

      <label>
        outline-style:
        <base-select :options="outlineStyleOpitons" :selected="outlineStyle" @change="outlineStyle = $event.target.value" />
      </label>

      <label>
        outline-width:
        <base-input id="width" :value="outlineWidth" @input="outlineWidth = $event.target.value" />
      </label>
    </template>

    <template #property_output>
      <div class="box">I'm a box with an outline</div>
    </template>
  </property-layout>
</template>

<script>
import PropertyLayout from '@/components/PropertyLayout.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseSelect from '@/components/BaseSelect.vue'

export default {
  name: 'AspectRatio',
  components: { PropertyLayout, BaseInput, BaseSelect },
  data() {
    return {
      outlineClr: 'pink',
      outlineStyleOpitons: ['dotted', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
      outlineStyle: 'dashed',
      outlineWidth: '5px'
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  background-color: var(--clr-primary);
  color: var(--clr-base);
  padding: 5rem;
  outline: v-bind(outlineClr) v-bind(outlineStyle) v-bind(outlineWidth);
  border-radius: var(--border-radius);
  text-align: center;
  transition: outline var(--transition-duration) var(--transition-timing-function);
}
</style>
