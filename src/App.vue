<template>
  <v-app>
    <Navbar @searchProducts="searchProducts" :cart="cart" />
    <v-content>
      <router-view :products="filteredProducts" @addCart="addCart"></router-view>
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
      searchQuery: "",
      cart: []
    };
  },
  components: {
    Navbar
  },
  computed: {
    filteredProducts: function() {
      return this.products
        ? this.products.filter(p =>
            p.name.toLowerCase().match(this.searchQuery.toLowerCase())
          )
        : this.products;
    }
  },
  mounted: function() {
    axios.get("https://hplussport.com/api/products/order/price").then(res => {
      this.products = res.data;
    });
  },
  methods: {
    searchProducts: function(query) {
      this.searchQuery = query;
    },
    addCart: function(products) {
      this.cart = products;
    }
  }
};
</script>

<style>
</style>
