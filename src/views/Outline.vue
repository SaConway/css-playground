<template>
  <property-layout name="outline" syntax="outline-color outline-style outline-width">
    <template #property_input>
      <!-- OUTLINE COLOR -->
      <color-picker id="outline_color" :value="outlineClr" label="outline-color:" @change="outlineClr = $event" />

      <!-- OUTLINE STYLE -->
      <base-select id="outline_style" :options="outlineStyleOpitons" :selected="outlineStyle" label="outline-style:" @change="outlineStyle = $event" />

      <!-- OUTLINE WIDTH -->
      <base-input id="outline_width" :value="outlineWidth" label="outline-width" @input="outlineWidth = $event" />
    </template>

    <template #property_output>
      <div class="box">I'm a box with an outline</div>
    </template>
  </property-layout>
</template>

<script>
import Colors from '@/utils/colors'
import PropertyLayout from '@/components/PropertyLayout.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import ColorPicker from '@/components/ColorPicker.vue'

export default {
  name: 'AspectRatio',
  components: { PropertyLayout, BaseInput, BaseSelect, ColorPicker },
  data() {
    return {
      outlineClr: Colors.RED.value,
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
