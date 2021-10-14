<template>
  <aside class="side_bar">
    <nav>
      <ul class="nav_list">
        <li v-for="property in Properties" :key="property.name">
          <router-link class="link" :to="property.path">{{ property.name }}</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import Properties from '@/utils/properties'

export default {
  name: 'SideBar',
  data() {
    return {
      Properties
    }
  }
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

  &:hover:not(.router-link-active) {
    outline: 1px solid;
  }

  &.router-link-active {
    cursor: default;
    color: var(--clr-secondary);
    user-select: text;
  }
}
</style>
