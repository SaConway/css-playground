<template>
  <input class="input" :id="id" :value="value" />
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

<style lang="scss" scoped></style>
