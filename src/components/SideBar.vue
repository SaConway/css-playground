<template>
  <aside class="side_bar">
    <nav>
      <ul class="nav_list">
        <li v-for="property in properties" :key="property">
          <router-link class="link" disabled="true" :to="property">{{ property }}</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
// UTILS
import Enums from '@/utils/enums'

export default {
  name: 'SideBar',
  data() {
    return {
      properties: Enums.PROPERTIES
    }
  }
}
</script>

<style lang="scss" scoped>
.side_bar {
  border-right: 1px solid var(--clr-accent);
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
  font-size: var(--fs-300);

  &:not(.router-link-active) {
    @include hover;
  }

  &.router-link-active {
    cursor: default;
    font-weight: 600;
    user-select: text;
    text-decoration: var(--clr-accent) wavy underline;
    text-underline-offset: 2px;
  }
}
</style>
