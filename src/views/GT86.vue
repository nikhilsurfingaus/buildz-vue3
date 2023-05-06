<template>

  <HeroSection :imageUrl="imageUrl" :title="title" :subtitle="subtitle" :bgOpacity="0.5" />
  <Products :products="productList" />
  <BaseLayout
      :image="baseImg"
      title="2014-16 Toyota GT86"
      subtitle="Price $24,000 - $28,000"
      text="The Toyota 86, introduced in 2012 and produced until 2018, was a sporty and affordable rear-wheel-drive coupe. It featured a 2.0-liter flat-four engine, delivering a spirited driving experience with its lightweight design. The Toyota 86 gained popularity among car enthusiasts for its agile handling and driver-focused dynamics."
      buttonLink="https://www.carsales.com.au/cars/toyota/86/automatic-transmission/red-colour/"
  />
  <RenderLayout
      :image="renderImg"
      title="Car Render"
      subtitle="Build Estimate $34,000"
      buttonLink="https://www.3dtuning.com/en-US/"
  />


</template>

<script>
import img from '../assets/toyota.jpg'
import HeroSection from '../components/HeroSection.vue';
import Products from '../components/Products.vue';
import { products } from '../data/GTData.js';
import { toRefs } from 'vue';
import baseImg from '../assets/toyotabase.jpg';
import BaseLayout from '../components/BaseLayout.vue';
import RenderLayout from '../components/RenderLayout.vue';
import renderImg from '../assets/86Render.jpg';


export default {
  components: {HeroSection, Products, BaseLayout, RenderLayout},
  setup() {
    const imageUrl = img;
    const title = 'TOYOTA GT86';
    const subtitle = ['BUILD GUIDE', 'PRODUCTS', 'RENDERS'];

    // convert reactive object to plain array
    const { products: productList } = toRefs(products);

    return {
      imageUrl,
      title,
      subtitle,
      productList,
      baseImg, renderImg
    };
  },
};
</script>
