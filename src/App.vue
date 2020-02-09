<template>
  <div id="app">
    <Products :products="products" />
  </div>
</template>

<script>
import Products from "./components/Products.vue";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      products: null
    };
  },
  components: {
    Products
  },
  mounted: function() {
    axios.get("https://hplussport.com/api/products").then(res => {
      this.products = res.data;
    });
  }
};
</script>

<style>
</style>
