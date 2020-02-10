<template>
  <div>
    <Navbar />
    <Products :products="products" />
  </div>
</template>
<script>
import Navbar from "./Navbar";
import Products from "./Products";
export default {
  name: "Home",
  props: ["products"],
  components: {
    Navbar,
    Products
  }
};
</script>
<style scoped>
</style>