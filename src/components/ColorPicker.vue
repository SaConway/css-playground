<template>
  <!-- LABEL -->
  <label :for="id">{{ label }}</label>

  <div class="picker_layout">
    <!-- PICKER BUTTON -->
    <input class="input" :id="id" type="button" :style="{ '--bg-clr': selectedColor }" @click="openPicker" />

    <!-- PICKER COLORS -->
    <ul v-show="showPicker" class="picker">
      <li class="color_item" v-for="color in colors" :key="color.name">
        <button :class="['color_btn', color.value === selectedColor ? 'active' : '']" :style="{ '--clr': color.value }" @click="colorPicked(color.value)" />
      </li>
    </ul>
  </div>

  <!-- OVERLAY -->
  <div v-show="showPicker" class="overlay" @click="closePicker" />
</template>

<script>
// UTILS
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
      selectedColor: null,
      showPicker: false
    }
  },
  watch: {
    value() {
      this.selectedColor = this.value
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
      this.selectedColor = color
      this.closePicker()
      this.$emit('change', color)
    }
  },
  created() {
    this.selectedColor = this.value
  }
}
</script>

<style lang="scss" scoped>
.picker_layout {
  position: relative;
}

.input {
  width: 100%;
  background-color: var(--bg-clr);
}

.picker {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: fit-content;
  padding: 1rem;
  list-style: none;
  background-color: var(--clr-accent);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: start;
  gap: 0.5rem;
  z-index: 2;
  transform-origin: top left;
  animation: grow var(--transition-duration) var(--transition-timing-function);
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
  position: relative;

  &.active::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    background-color: var(--clr-base);
    border-top-right-radius: var(--border-radius);
    clip-path: polygon(100% 0, 0 0, 100% 100%);
  }
}

.overlay {
  position: fixed;
  inset: 0;
  z-index: 1;
}
</style>
