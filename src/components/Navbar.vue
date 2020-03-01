<template>
  <v-app-bar app color="red darken-1" dense dark>
    <v-btn text dark href="/">
      <v-toolbar-title>H+ Sport Shop</v-toolbar-title>
    </v-btn>
    <v-spacer></v-spacer>
    <v-text-field
      hide-details
      prepend-icon="search"
      placeholder="Search Product..."
      single-line
      v-model="searchQuery"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template v-slot:activator="{ on: menu }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn text dark v-on="{ ...tooltip, ...menu }">
              <v-icon>mdi-cart</v-icon>
              <v-badge :content="cart.length.toString()" color="red darken-4" inline></v-badge>
            </v-btn>
          </template>
          <span>Cart</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item v-for="(product, index) in cart" :key="index">
          <v-list-item-title>{{ cart[index].name }} <strong>€ {{parseInt(cart[index].price).toFixed(2)}}</strong></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn text dark href="/#/signin">Sign In</v-btn>
    <v-btn text dark href="/#/join">Join</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  props: ["cart"],
  data: () => {
    return {
      searchQuery: ""
    };
  },
  watch: {
    searchQuery: function() {
      this.$emit("searchProducts", this.searchQuery);
    }
  }
};
</script>

<style scoped>
</style>