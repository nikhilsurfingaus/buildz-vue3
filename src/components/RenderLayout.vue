<template>
    <div class="main">
      <div class="layout">
        <div class="content-container">
          <h1 class="title">{{ title }}</h1>
          <h2 class="subtitle">{{ subtitle }}</h2>
          <a class="button" :href="buttonLink" target="_blank">
            CarTuning3D <i class="pi pi-prime ml-2"></i>
          </a>
        </div>
        <div class="image-container">
          <img :src="image" alt="Component Image" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RenderLayout',
    components: {},
    props: {
      image: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: true
      },
      buttonLink: {
        type: String,
        required: true
      }
    },
    setup() {
      return {}
    }
  };
  </script>
  
  <style scoped>
  .main {
    background-color: #2a2e31;
  }
  
  .layout {
    display: flex;
    height: 100vh;
    margin: auto;
    width: 80%;
  }
  
  .content-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    color: white;
    font-family: 'Proxima Nova', sans-serif;
  }
  
  .title {
    font-size: 3.7em;
    margin-bottom: 0.1rem; /* Adjusted margin */
    text-align: center;
    font-weight: bold;
  }
  
  .subtitle {
    font-size: 2.3rem;
    margin-bottom: 0.1rem; /* Adjusted margin */
    text-align: center;
    font-weight: 600;
  }
  
  .text {
    font-size: 1rem;
    text-align: center;
    max-width: 60%; /* Set a smaller width in percentage */
    margin: 0 auto; /* Center the text and remove vertical margin */
  }
  
  .image-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 60%; /* Set a fixed width in percentage */
  }
  
  .image-container img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
    border: 3px solid #871E1E;
  }
  
  .image-container img:hover {
    transform: scale(1.035);
    transition: transform 0.2s;
    cursor: pointer;
  }
  
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    background-color: #141414;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.3s ease;
    cursor: pointer;
    width: 25%;
    margin: 10px auto;
  }
  
  .button:hover {
    background-color: #222020;
  }
  @media screen and (max-width: 600px) {
  .layout {
    padding: 1rem;
  }

  .image-container {
    max-width: 200px;
  }

  .title {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .text {
    font-size: 0.5rem;
    max-width: 100%;
  }

  .button {
    width: 100%;
  }
}
  </style>
  