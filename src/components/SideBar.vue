<template>
  <aside :class="['side_bar', isMobile && mobileOpen ? 'open' : '']">
    <!-- OPEN MENU (FOR MOBILE) -->
    <button v-if="showOpenBtn" class="menu_btn" aria-label="Open menu" @click="mobileOpen = true">
      <img src="../assets/menu.svg" alt="" />
    </button>

    <!-- CLOSE MENU (FOR MOBILE) -->
    <button v-if="showCloseBtn" class="menu_btn" aria-label="Close menu" @click="mobileOpen = false">
      <img src="../assets/close.svg" alt="" />
    </button>

    <!-- NAVIGATION -->
    <nav v-if="showNav" class="nav">
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
      return window.innerWidth < 600
    },
    showOpenBtn() {
      return this.isMobile && !this.mobileOpen
    },
    showCloseBtn() {
      return this.isMobile && this.mobileOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.side_bar {
  border-right: 1px solid var(--clr-accent);
  padding: 2rem;

  @media (max-width: 600px) {
    padding: 0;
    border-right: 0;
    background-color: var(--clr-base);

    &.open {
      position: fixed;
      inset: 0;
      z-index: 1;
      display: grid;
      place-content: stretch;
    }

    .menu_btn {
      align-self: start;
    }

    .nav {
      justify-self: center;
    }
  }
}

.menu_btn {
  display: block;
  margin-left: auto;
  margin-right: 1rem;
  width: 5rem;
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
