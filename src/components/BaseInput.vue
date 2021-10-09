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
  padding: 2rem 0.25rem;
  color: var(--clr-secondary);
  background: none;
  border: 1px solid;
  border-radius: var(--border-radius);
  text-align: center;
  font-size: 1.4rem;
}
</style>
