<template>
  <nav class="navbar">
    <div class="space">
      <div class="navbar-brand">
      <a class="navbar-item" href="#">
        O
        <span>G. </span>
      </a>
      <button class="button navbar-burger" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>


    <div class="navbar-menu" @click="toggleMenu" :class="{ 'is-active': isMenuOpen, 'show': isMenuOpen }" >
      <a class="navbar-item" href="#">
        Home
      </a>
      <!-- <a class="navbar-item" href="#">
        About
      </a> -->
      <a class="navbar-item" href="#skills">
        skills
      </a>
      <a class="navbar-item" href="#services">
        Services
      </a>
      <a class="navbar-item" href="#contact">
        Contact
      </a>
      <!-- <div class="navbar-end">
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
      </div> -->
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



.button{
  width: 55px;
    padding: 6px !important;

}


.space{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;

}
.navbar {
  background-color: #1a1a1d;
  /* background-color: #fff; */
  /* border-bottom: 1px solid #ccc; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  padding: 2rem 0rem;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  position: fixed;
  width: 100%;
}

.navbar-brand {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* margin: 0 auto; */
}


.navbar-start {
  display: flex;
  /* width: 100%; */
  border: 1px solid black;
  justify-content: space-between;
}

.navbar-item {
  display: block;
  color: #950740;
  font-size: 20px;

}
.navbar-item:hover{
  color:#fff;
}

.navbar-burger {
  border: none;
  background-color: transparent;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 1.8rem;
}

.navbar-burger span {
  height: 2px;
  width: 100%;
  background-color: #333;
  border-radius: 2px;
  transition: all 0.2s ease-in-out;
}

.navbar-burger.is-active span:nth-child(1) {
  transform: rotate(45deg) translate(3px, 3px);
}

.navbar-burger.is-active span:nth-child(2) {
  opacity: 0;
}

.navbar-burger.is-active span:nth-child(3) {
  transform: rotate(-45deg) translate(3px, -3px);
}

@media screen and (min-width: 768px) {
  .space {
    flex-direction: row;
  }
  .navbar-burger {
    display: none;
    border: 1px solid black;
  }

  .navbar-start {
    display: flex !important;
    flex-direction: row;
    justify-content: flex-end;
  }

  .navbar-menu .navbar-item {
    /* padding-left: 1rem; */
    /* padding-right: 1rem; */
  }
  .navbar-menu{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
}

@media screen and (max-width:768px){
  .is-active{
    /* width: 100%; */
    /* background-color: red; */
    text-align: center;
    /* display: block */
    /* display: flex; */
    /* flex-direction: column; */
  }
  .navbar-menu{
    display: none;
  }

  .navbar-item{
    /* color: #950740; */
  }

  .show{
    display: block;
  };
}
</style>