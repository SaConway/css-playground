<template>
  <input :id="id" :value="value" />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    id: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  cursor: pointer;
  padding: 2rem 4rem;
  color: var(--clr-secondary);
  background-color: transparent;
  border: 1px solid currentColor;
  border-radius: var(--border-radius);
  text-align: center;
  font-size: 1.4rem;
}
</style>
