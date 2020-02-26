<template>
  <v-app>
    <v-app-bar app color="light-blue lighten-2" dense dark>
      <v-toolbar-title>H+ Sport Shop</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y> 
        <template v-slot:activator="{ on: menu }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn text dark v-on="{ ...tooltip, ...menu }">
                <v-icon>mdi-cart</v-icon>
                <v-badge content="0" inline></v-badge>
              </v-btn>
            </template>
            <span>Cart</span>
          </v-tooltip>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <router-view :products="products"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
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
  components: {},
  mounted: function() {
    axios.get("https://hplussport.com/api/products/order/price").then(res => {
      this.products = res.data;
    });
  }
};
</script>

<style>
</style>
