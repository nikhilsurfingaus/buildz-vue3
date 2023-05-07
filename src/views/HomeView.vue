<template>
  <div class="home">
    <Carousel :autoplay="3000" :wrap-around="false" :transition="600">
    <Slide v-for="slide in imageAddresses" :key="slide">
      <div class="carousel__item animate__animated animate__fadeIn">
        <img :src="slide" alt="slide" />
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
  </div>
  <div class="type">
    <Typewriter
        :words="subtitle"
        :loop="0"
        :delay-speed="1500"
        :delete-speed="80"
        :type-speed="80"
        :cursor="true"
        :cursor-blinking="true"
        :cursor-style="'|'"
        :cursor-color="'#fff'"
        class="text"
      />  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { Typewriter } from 'vue-simple-typewriter';
import wp1 from '../assets/wallpaper/wp1.jpg'
import wp3 from '../assets/wallpaper/wp3.jpg'
import wp4 from '../assets/wallpaper/wp4.jpg'
import wp5 from '../assets/wallpaper/wp5.jpg'
import wp6 from '../assets/wallpaper/wp6.jpg'

export default {
  name: 'HomeView',
  components: {Carousel,Slide, Navigation, Typewriter},
  setup() {

    const imageAddresses = [
    wp4,wp1,wp3,wp5,wp6
    ];
    const subtitle = ['MODIFY YOUR RIDE', 'UNLEASH YOUR STYLE', 'POWER AND PERFORMANCE', 'EMBRACE THE DRIVE', 'CAR ENTHUSIAST'];

    return {
      imageAddresses, subtitle,
    };
  }
};
</script>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/proxima-nova-2');
@import url("https://fonts.googleapis.com/css2?family=Exo+2&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Labrada&display=swap");
.home {
  height: 120vh;
  margin: auto;
}
.carousel__item {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__item img {
  height: 120vh;
  width: 220vh !important;
}

.carousel__slide {
  padding: 0px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}

.type {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2a2e31 !important;
  color: white;
  font-family: 'Proxima Nova', sans-serif;
  font-size: 5em;
  font-weight: bold;
}

@media screen and (max-width: 600px) {
  .type {
  font-size: 2em;
  height: 20vh;
  }
  .home {
  height: 50vh;
}
  .carousel__item img {
  height: 50vh;
  width: 80vh !important;
}
}
</style>