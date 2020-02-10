<template>
  <div id="app">
    <router-view :products="products"></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      products: null
    };
  },
  components: {
  },
  mounted: function() {
    axios.get("https://hplussport.com/api/products/order/price").then(res => {
      this.products = res.data;
    });
  }
};
</script>

<style>
body {
  padding-top: 72px;
}
</style>
