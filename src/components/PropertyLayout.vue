<template>
  <main class="property_layout">
    <!-- TITLE -->
    <pre class="property_title">{{ title }}</pre>

    <!-- INPUT -->
    <div class="property_input">
      <slot name="property_input" />
    </div>

    <!-- OUTPUT -->
    <slot name="property_output" />
  </main>
</template>

<script>
export default {
  name: 'PropertyLayout',
  props: {
    name: {
      type: String,
      required: true
    },
    syntax: {
      type: String,
      required: true
    }
  },
  computed: {
    title() {
      return `${this.name}: ${this.syntax};`
    }
  }
}
</script>

<style lang="scss" scoped>
.property_layout {
  max-width: 60rem;
  height: fit-content;
  margin: 0 auto;
  display: grid;
  gap: 6rem;
  padding: 3rem;
}

.property_input {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  gap: 2rem 1rem;
}

.property_title {
  border-left: 2px solid var(--clr-primary);
  padding: 2rem;
  background-color: var(--clr-accent);
}
</style>
