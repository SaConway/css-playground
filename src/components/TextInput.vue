<template>
  <!-- LABEL -->
  <label :for="id">{{ label }}</label>

  <!-- INPUT -->
  <input class="input" :id="id" :value="value" @input="onInput" />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    id: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false,
      default: ''
    },
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
