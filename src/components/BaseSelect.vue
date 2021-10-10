<template>
  <div class="base_select">
    <select>
      <option v-for="option in options" :key="option" :value="option" :selected="option === selected">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    options: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.base_select {
  display: grid;
  align-items: center;

  &::after,
  select {
    grid-row: 1;
    grid-column: 1;
  }

  select {
    appearance: none;
    cursor: pointer;
    padding: 2rem 0.25rem;
    line-height: 1.1;
    font-size: 1.4rem;
    font-family: inherit;
    text-align: center;
    background-color: transparent;
    color: var(--clr-secondary);
    border: 1px solid currentColor;
    border-radius: var(--border-radius);
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
