<template>
  <aside :class="['side_bar', isMobile && mobileOpen ? 'open' : '']">
    <button class="toggle_btn" @click="mobileOpen = !mobileOpen">{{ mobileOpen ? 'Close' : 'Open' }}</button>

    <nav v-if="showNav">
      <ul class="nav_list">
        <li v-for="property in properties" :key="property">
          <router-link class="link" disabled="true" :to="property" @click="mobileOpen = false">{{ property }}</router-link>
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
      properties: Enums.PROPERTIES,
      mobileOpen: true
    }
  },
  computed: {
    showNav() {
      return this.isMobile ? this.mobileOpen : true
    },
    isMobile() {
      console.log(window.innerWidth)
      return window.innerWidth < 600
    }
  }
}
</script>

<style lang="scss" scoped>
.side_bar {
  border-right: 1px solid var(--clr-accent);
  padding: 2rem;

  @media (max-width: 600px) {
    &.open {
      border-right: 0;
      background-color: var(--clr-base);
      position: fixed;
      inset: 0;
      z-index: 1;
      display: grid;
      place-content: center;
    }
  }
}

.toggle_btn {
  display: none;

  @media (max-width: 600px) {
    display: block;
    padding: 1.5rem 3rem;
    color: var(--clr-primary);
    background-color: transparent;
    border: 1px solid var(--clr-accent);
    border-radius: var(--border-radius);
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
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

  @media (max-width: 600px) {
    font-size: var(--fs-400);
  }

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
