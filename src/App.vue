<template>
  <Scroll />
  <Nav />
  <router-view/>
  <Footer />
</template>

<script lang="ts">
import Nav from './components/Nav.vue'
import 'primeicons/primeicons.css';
import Footer from './components/Footer.vue'
import Scroll from './components/Scroll.vue'

export default {
  name: 'App',
  components: {
    Nav,Footer, Scroll
  }
}
</script>
<style>


nav a.router-link-exact-active {
  color: #DD0000;
}
::-webkit-scrollbar {
    width: 10px;
    background: #2a2e31;
}
::-webkit-scrollbar-thumb {
    border-radius: 2em;
    background: linear-gradient(-45deg, #DD0000, #FF0000, #D10000, #871E1E);
}
</style>
