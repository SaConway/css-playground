<template>
  <!-- LABEL -->
  <label :for="id">{{ label }}</label>

  <div class="picker_layout">
    <!-- PICKER BUTTON -->
    <input class="input" :id="id" type="button" :value="value" @click="openPicker" />

    <!-- PICKER COLORS -->
    <ul v-show="showPicker" class="picker">
      <li class="color_item" v-for="color in colors" :key="color.name">
        <button class="color_btn" :style="{ '--clr': color.value }" @click="colorPicked(color.value)" />
      </li>
    </ul>
  </div>

  <!-- OVERLAY -->
  <div v-show="showPicker" class="overlay" @click="closePicker" />
</template>

<script>
import Colors from '@/utils/colors'

export default {
  name: 'ColorPicker',
  props: {
    id: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  emits: ['change'],
  data() {
    return {
      colors: Colors,
      showPicker: false
    }
  },
  methods: {
    openPicker() {
      this.showPicker = true
    },
    closePicker() {
      this.showPicker = false
    },
    colorPicked(color) {
      this.closePicker()
      this.$emit('change', color)
    }
  }
}
</script>

<style lang="scss" scoped>
.picker_layout {
  position: relative;
}

.input {
  width: 100%;
}

.picker {
  position: absolute;
  bottom: calc(100% + 1rem);
  left: 0;
  width: fit-content;
  padding: 1rem;
  list-style: none;
  background-color: var(--clr-secondary);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: start;
  gap: 0.5rem;
  z-index: 2;
}

.color_item {
  display: flex;
}

.color_btn {
  width: 3rem;
  aspect-ratio: 1;
  cursor: pointer;
  background-color: var(--clr);
  border: none;
  border-radius: var(--border-radius);
}

.overlay {
  position: fixed;
  inset: 0;
  z-index: 1;
}
</style>
