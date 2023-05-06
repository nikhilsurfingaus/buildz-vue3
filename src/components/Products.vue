<template>
  <div class="main" :style="{ height: mainHeight + 'px' }">
    <h1 class="title">Build Parts</h1>
    <div class="container">
      <div class="products">
        <div class="product" v-for="(product, index) in products" :key="index">
          <img :src="product.imageSrc" alt="Product Image" />
          <h3>{{ product.name }}</h3>
          <p class="price">{{ product.price }}</p>
          <a :href="product.link" target="_blank">Buy Product</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, watch } from 'vue';

export default defineComponent({
  name: 'Products',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const mainHeight = reactive({
      value: 0,
    });

    watch(
      () => props.products.length,
      () => {
        calculateMainHeight();
      }
    );

    const calculateMainHeight = () => {
      const productsContainer = document.querySelector('.products');
      if (productsContainer) {
        const productHeight = productsContainer.offsetHeight;
        const extraSpace = 20; // Adjust this value to control the extra space at the bottom
        mainHeight.value = productHeight + extraSpace;      
      }
    };

    calculateMainHeight();

    return {
      mainHeight,
    };
  },
});
</script>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/proxima-nova-2');
@import url("https://fonts.googleapis.com/css2?family=Exo+2&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Labrada&display=swap");

.main {
    background: #2a2e31 !important;
}

.title {
    color: #fff;
    font-size: 2.8em;
    font-family: 'Proxima Nova', sans-serif;
    font-weight: bold;
    padding-top: 50px;
    text-align: center;
}

.container {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
}

.products {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px; /* Adjust this value to control the extra space at the bottom */

}

@media screen and (min-width: 600px) {
    .products {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 30px;
    }
}

.product {
  border: 3px solid #871E1E;
  padding: 30px;
  text-align: center;
  flex-basis: 300px; /* Adjust this value to set the desired width for each card */
  margin-bottom: 20px;
  border-radius: 10px;
  cursor: pointer;
  background: black;
  height: 480px;
}


@media screen and (min-width: 600px) {
    .product {
        flex-basis: auto;
        margin-bottom: 0;
    }
}

.product img {
    margin-bottom: 10px;
    border-radius: 10px;
}

.product h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #fff;
}

.product .price {
    font-weight: bold;
    margin-bottom: 10px;
    color: #fff;
}

.product a {
    display: inline-block;
    background-color: #41A933;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.2s;
}

.product a:hover {
    background-color: #2C7323;
}

.product:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
    background: #181818;
}

@media screen and (max-width: 600px) {

}
</style>
