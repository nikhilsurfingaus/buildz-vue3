<template>
  <div class="bg-black">
    <nav
      class="
        container
        px-6
        py-6
        mx-auto
        md:flex md:justify-between md:items-center
        navbar
      "
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="
            text-xl
            font-bold
            text-red-600
            md:text-2xl
            hover:text-red-600	
            animate__animated animate__slideInDown
          "
          >BUILDZ <i class="pi pi-prime ml-0 "></i>
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 
          route
          animate__animated animate__slideInDown
        "
      >
        <li>
            <router-link
            to="/"
            class="
                text-gray-100
                hover:text-red-600	
            "
            >Home</router-link>
        </li>
        <li>
            <router-link
            to="/gt86"
            class="
                text-gray-100
                hover:text-red-600	
            "
            >GT86</router-link>
        </li>
        <li>
            <router-link
            to="/a7"
            class="
                text-gray-100
                hover:text-red-600	
            "
            >A7</router-link>
        </li>
        <li>
            <router-link
            to="/about"
            class="
                text-gray-100
                hover:text-red-600	
            "
            >About</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
export default{
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>
<style>
@import url('https://fonts.cdnfonts.com/css/proxima-nova-2');
@import url("https://fonts.googleapis.com/css2?family=Exo+2&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Labrada&display=swap");
.route {
  font-family: 'Proxima Nova', sans-serif;
  font-size: 1.2em;
  font-weight: bold;
}
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
}

</style>