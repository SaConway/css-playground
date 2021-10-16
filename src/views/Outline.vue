<template>
  <property-layout :name="property.name" :syntax="property.syntax" :value="value">
    <template #input>
      <!-- OUTLINE COLOR -->
      <color-picker id="outline_color" :value="outlineClr" label="outline-color" @change="outlineClr = $event" />

      <!-- OUTLINE STYLE -->
      <base-select id="outline_style" :options="outlineStyleOpitons" :selected="outlineStyle" label="outline-style" @change="outlineStyle = $event" />

      <!-- OUTLINE WIDTH -->
      <base-input id="outline_width" type="number" :value="outlineWidth" label="outline-width" @input="outlineWidth = $event" />
    </template>

    <template #output>
      <div class="box">I'm a box with an outline</div>
    </template>
  </property-layout>
</template>

<script>
// UTILS
import Properties from '@/utils/properties'
import Colors from '@/utils/colors'

// COMPONENT
import PropertyLayout from '@/components/PropertyLayout'
import BaseInput from '@/components/BaseInput'
import BaseSelect from '@/components/BaseSelect'
import ColorPicker from '@/components/ColorPicker'

export default {
  name: Properties.OUTLINE.componentName,
  components: { PropertyLayout, BaseInput, BaseSelect, ColorPicker },
  data() {
    return {
      property: Properties.OUTLINE,
      outlineClr: Colors.RED.value,
      outlineStyleOpitons: ['dotted', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
      outlineStyle: 'dashed',
      outlineWidth: '5'
    }
  },
  computed: {
    value() {
      return `${this.outlineClr} ${this.outlineStyle} ${this.outlineWidth}px`
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
