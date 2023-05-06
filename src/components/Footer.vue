<template>
    <footer class="bg-neutral-900 text-center text-white">
      <div class="container-full px-6 pt-6">
        <div class="mb-6 flex justify-center">
          <!-- Replace Facebook icon with YouTube icon -->
          <a
            href="https://www.youtube.com/@WaveFlightSimulations"
            class="m-1 h-9 w-9 flex items-center justify-center rounded-full border-2 border-white text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
            target="_blank" rel="noopener noreferrer"

          >
            <i class="pi pi-youtube"></i>
          </a>
  
          <!-- Add GitHub icon -->
          <a
          target="_blank" rel="noopener noreferrer"
            href="https://github.com/nikhilsurfingaus"
            class="m-1 h-9 w-9 flex items-center justify-center rounded-full border-2 border-white text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <i class="pi pi-github"></i>
          </a>
        </div>
      </div>
  
      <div class="p-4 text-center bottom" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2023 Wave Flight Simulation Studios
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    // Component logic goes here
  }
  </script>
  
  <style>
  .container-full {
    width: 100%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .bottom {
    color: rgb(141, 0, 0);
    font-weight: bold;
  }
  /* Component-specific styles go here */
  </style>
  