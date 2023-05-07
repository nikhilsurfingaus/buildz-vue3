<template>
  <div class="contain">
    <div class="about-page">
      <div class="about-section">
        <h1 class="title">About</h1>
        <div class="image-section">
          <img :src="profile" alt="About Image" />
        </div>
        <hr />
        <div class="text-container">
          <p class="blurb">
            Welcome to BUILDZ, the ultimate car build website, our platform showcases in-depth builds of two iconic cars, the Toyota 86 and Audi A7. With meticulous attention to detail, we provide step-by-step guides, stunning car photos, and renders to bring these builds to life. Whether you're a car enthusiast or seeking inspiration for your own project, BUILDZ is the perfect destination. Explore our collection of premium products, get inspired by jaw-dropping car photos, and visualize your dream build.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profile from '../assets/profile.png';

export default {
  setup() {
    return {
      profile
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/proxima-nova-2');
@import url("https://fonts.googleapis.com/css2?family=Exo+2&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Labrada&display=swap");

.title {
  color: #fff;
  font-size: 2.8em;
  font-family: 'Proxima Nova', sans-serif;
  font-weight: bold;
  padding-top: 5px;
  text-align: center;
}

.text-container {
  display: flex;
  justify-content: center;
}

.blurb {
  margin-top: 40px;
  color: white;
  text-align: center;
  font-family: 'Proxima Nova', sans-serif;
  line-height: 2.5;
  min-width: 60%;
  max-width: 60%;
  font-size: 1.2em;
}

.contain {
  height: 120vh;
  background-color: #1e1e1e;
  padding-top: 80px;
  padding-bottom: 40px;
}

.about-page {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background: #2a2e31 !important;
  border: 3px solid #871E1E;
  height: 80vh;
  border-radius: 10px;
}

.about-section {
  margin-bottom: 20px;
}

.image-section {
  text-align: center;
  margin-bottom: 20px;
  width: 15%;
  margin: auto;
  margin-top: 20px;
}

hr {
  border: none;
  height: 1px;
  background-color: #871E1E;
  height: 3px;
  width: 70%;
  margin: auto;
  margin-top: 40px;
}

@media screen and (max-width: 600px) {
  .image-section {
    width: 100px;
  }
  .title {
    font-size: 1.8em;
  }
  .blurb {
    font-size: 0.6em;
  }
}

@media only screen and (min-width: 1400px) and (max-width: 1600px)  {
  .about-page {
  height: 90vh;
  }
  .blurb {
    font-size: 1em;
  }
}

</style>
