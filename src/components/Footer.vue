<template>
  <v-footer dark padless>
    <v-card flat tile class="red darken-1 white--text text-center">
      <v-card-text
        class="white--text pt-5"
      >All products and people associated with H+ Sport are also fictitious. Any resemblance to real brands, products, or people is purely coincidental. Information provided about the product is also fictitious and should not be construed to be representative of actual products on the market in a similar product category.</v-card-text>
      <!-- <v-divider></v-divider> -->
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>Built with Vue.JS & Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default { name: "Footer" };
</script>
<style scoped>
</style>