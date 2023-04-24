<template>
  <nav>
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        Your Logo Here
      </a>
      <button class="button navbar-burger" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
      <div class="navbar-start">
        <a class="navbar-item" href="#">
          Home
        </a>
        <a class="navbar-item" href="#">
          About
        </a>
        <a class="navbar-item" href="#">
          Contact
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary" href="#">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light" href="#">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      toggleMenu,
    };
  },
};
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .navbar-burger {
    display: none;
  }
  .navbar-menu {
    display: flex !important;
    flex-direction: row;
    justify-content: flex-end;
  }
  .navbar-menu .navbar-item {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
