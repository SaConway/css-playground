<template>
  <main class="property_layout">
    <pre class="property_title">{{ title }}</pre>

    <slot />
  </main>
</template>

<script>
export default {
  name: 'PropertyLayout',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.property_layout {
  max-width: 100rem;
  margin: 0 auto;
  display: grid;
  place-items: center;
  gap: 6rem;
  padding: 3rem 1rem;
}

.property_title {
  border-left: 2px solid var(--clr-primary);
  padding: 2rem;
  background-color: rgba(50, 50, 50, 1);
}
</style>
