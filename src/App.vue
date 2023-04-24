<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <section class="hero">
    <Navbar/> 
    <HeroSec/>
  </section>
  <MyServices/>
  <Footer/>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HeroSec from './components/HeroSec.vue'
import MyServices from './components/MyServices.vue'
import Footer from './components/Footer.vue'

export default{
  components:{Navbar, HeroSec, MyServices, Footer},
  setup(){

  }
}
</script>

<style>
    *{
     margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    scroll-behavior: smooth;
    scroll-padding-top: 2rem;
    font-family: "nunito", sans-serif;
    }

    .hero{
      background-color: #1a1a1d;
      /* height: 100vh; */
    }

    body{
      cursor: url('./assets/cursor.cur')
    }


    /* scollbar  */
    ::-webkit-scrollbar{
      width: 7px;
    }

    /* track */
    ::-webkit-scrollbar-track{
      box-shadow: 0 0 5px white;
      border-radius: 7px;
    }

    /* handle */
    ::-webkit-scrollbar-thumb{
      background: #950740;
      border-radius: 5px;
    }

    /* handle on hover */
    ::-webkit-scrollbar-thumb:hover{
      background: #423030;
    }
</style>
