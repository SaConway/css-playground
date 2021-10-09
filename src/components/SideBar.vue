<template>
  <aside class="side_bar">
    <nav>
      <ul class="nav_list">
        <li><router-link class="link" to="/aspect-ratio">aspect-ratio</router-link></li>
        <li><router-link class="link" to="/outline">outline</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style lang="scss" scoped>
.side_bar {
  background-color: var(--clr-accent);
  padding: 2rem;
}

.nav_list {
  list-style: none;
  display: grid;
  gap: 1rem;
}

.link {
  text-decoration: none;
  padding: 1rem;
  display: block;

  &::before {
    content: '//';
    margin-right: 0.5rem;
    color: inherit;
  }

  &.router-link-active {
    color: var(--clr-secondary);
  }
}
</style>
