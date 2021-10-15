<template>
  <!-- LABEL -->
  <label :for="id">{{ label }}</label>

  <!-- SELECT -->
  <div class="base_select">
    <select class="input" :id="id" @change="onChange">
      <option v-for="option in options" :key="option" :value="option" :selected="option === selected">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
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
    }
  },
  emits: ['change'],
  methods: {
    onChange(e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.base_select {
  display: inline-grid;
  align-items: center;

  &::after,
  select {
    grid-row: 1;
    grid-column: 1;
  }

  select {
    appearance: none;
  }

  // CUSTOM ARROW
  &::after {
    content: '';
    width: 0.8em;
    height: 0.5em;
    margin-right: 1rem;
    background-color: var(--clr-secondary);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    justify-self: flex-end;
  }
}
</style>
