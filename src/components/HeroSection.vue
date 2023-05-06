<template>
  <div class="hero" :style="{ backgroundImage: `url(${imageUrl})` }">
    <div class="overlay"></div>
    <div class="hero-text">
      <h1>{{ title }}</h1>
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
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Typewriter } from 'vue-simple-typewriter';

export default defineComponent({
  name: 'HeroSection',
  components: { Typewriter },
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: Array,
      required: true,
    },
  },
  setup() {


    return { };
  },
});
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/proxima-nova-2');
@import url("https://fonts.googleapis.com/css2?family=Exo+2&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Labrada&display=swap");

.hero {
  height: 95vh;
  width: 100%;
  background-size: cover;
  background-position: center center;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-family: 'Proxima Nova', sans-serif;
}

.hero-text h1 {
    font-size: 4.5em;
    font-weight: bold;
}

.hero-text .text {
    font-size: 2.5em;
    font-weight: 550;
    margin-top: 1em;
}
</style>
