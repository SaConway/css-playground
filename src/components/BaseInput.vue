<template>
  <fieldset>
    <!-- LABEL -->
    <legend class="label">{{ label }}</legend>

    <!-- OPTIONS -->
    <div class="options">
      <label :class="['form_control', type, option === selected ? 'selected' : '']" v-for="option in options" :key="option" :style="{ '--value': option }">
        <input class="custom_radio" type="radio" :name="id" @change="onChange(option)" />

        <span v-if="type === Enums.INPUT_TYPES.SELECT">
          {{ option }}
        </span>
      </label>
    </div>
  </fieldset>
</template>

<script>
// UTILS
import Enums from '@/utils/enums'

export default {
  name: 'BaseInput',
  props: {
    id: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: false,
      default: ''
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: Enums.INPUT_TYPES.SELECT
    }
  },
  emits: ['change'],
  data() {
    return {
      Enums
    }
  },
  methods: {
    onChange(option) {
      this.$emit('change', option)
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  font-size: var(--fs-300);
}

.options {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.form_control {
  position: relative;
  color: var(--clr-primary);
  border: 1px solid var(--clr-accent);
  border-radius: var(--border-radius);
  padding: 1rem 2rem;

  &.selected {
    &.select {
      background-color: var(--clr-primary);
      color: var(--clr-base);
    }

    &.color {
      border: 1px solid var(--clr-primary);
    }
  }

  &.color {
    width: 3rem;
    aspect-ratio: 1;
    background-color: var(--value);
    border: none;
  }
}

.custom_radio {
  cursor: pointer;
  appearance: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
}
</style>
