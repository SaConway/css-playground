<template>
  <footer class="footer">
    <p>Made by <a class="link" href="https://www.sageeconway.com">Sagee Conway</a></p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--clr-primary);
  color: var(--clr-base);
  padding: 1rem 2rem;
}

.link {
  --clr-focus: var(--clr-base);
}
</style>
