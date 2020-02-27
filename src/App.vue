<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view :products="products"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
import Navbar from "./components/Navbar";

export default {
  name: "App",
  data: () => {
    return {
      products: null,
      items: [
        { title: "Item 1" },
        { title: "Item 2" },
        { title: "Item 3" },
        { title: "Item 4" }
      ]
    };
  },
  components: {
    Navbar
  },
  mounted: function() {
    axios.get("https://hplussport.com/api/products/order/price").then(res => {
      this.products = res.data;
    });
  }
};
</script>

<style>
</style>
