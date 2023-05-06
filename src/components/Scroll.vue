<template>
    <button class="scroll-to-top" @click="scrollToTop" v-show="showButton">
        <i class="pi pi-arrow-up"></i>
    </button>
  </template>
  
  <script>
  export default {
    name: 'Scroll',
    data() {
      return {
        showButton: false,
      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
      handleScroll() {
        this.showButton = window.pageYOffset > 200;
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  };
  </script>
  
  <style>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
  color: #fff;
  border: none;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scroll-to-top:hover {
  opacity: 1;
}
  </style>
  