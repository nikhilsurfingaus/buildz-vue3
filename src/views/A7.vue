<template>
  <HeroSection :imageUrl="imageUrl" :title="title" :subtitle="subtitle" :bgOpacity="0.5" />
  <Products :products="productList" />
  <BaseLayout
      :image="baseImg"
      title="2018-19 Audi A7"
      subtitle="Price $65,000 - $80,000"
      text="The 2018-2019 Audi A7 is a luxury sedan that combines elegant styling with powerful performance. It features a sleek and aerodynamic design, with a spacious interior and advanced technology. The A7 offers a range of engine options and delivers a refined driving experience, making it a desirable choice for those seeking both comfort and sophistication."
      buttonLink="https://www.carsales.com.au/cars/?q=(And.Service.carsales._.(C.Make.Audi._.Model.A7.)_.Year.range(2018..2020).)&sort=%7ePrice"
  />
  <RenderLayout
      :image="renderImg"
      title="Car Render"
      subtitle="Build Estimate $86,000"
      buttonLink="https://www.3dtuning.com/en-US/"
  />
</template>

<script>
import img from '../assets/audi.jpg'
import HeroSection from '../components/HeroSection.vue';
import Products from '../components/Products.vue';
import { products } from '../data/A7Data.js';
import { toRefs } from 'vue';
import baseImg from '../assets/audibase.jpg';
import BaseLayout from '../components/BaseLayout.vue';
import RenderLayout from '../components/RenderLayout.vue';
import renderImg from '../assets/A7Render.jpg';

export default {
  components: {HeroSection, Products, BaseLayout, RenderLayout},
  setup(){
    const imageUrl = img;
    const title = 'AUDI A7';
    const subtitle = ['BUILD GUIDE', 'PRODUCTS', 'RENDERS'];

    // convert reactive object to plain array
    const { products: productList } = toRefs(products);

    return {
      imageUrl,
      title,
      subtitle,
      productList, baseImg, renderImg
    };
  }
};
</script>