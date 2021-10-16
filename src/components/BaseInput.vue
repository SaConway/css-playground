<template>
  <!-- LABEL -->
  <label :for="id">{{ label }}</label>

  <!-- INPUT -->
  <input class="input" :id="id" :type="type" :value="value" @input="onInput" autocomplete="off" />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      required: false,
      default: 'text',
      validator: value => {
        return ['text', 'number'].includes(value)
      }
    },
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
  emits: ['input'],
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
