<template>
  <v-app-bar app color="red darken-1" dense dark>
    <v-btn text dark href="/"><v-toolbar-title>H+ Sport Shop</v-toolbar-title></v-btn>
    <v-spacer></v-spacer>
    <v-text-field hide-details prepend-icon="search" placeholder="Search product..." single-line></v-text-field>
    <v-menu offset-y>
      <template v-slot:activator="{ on: menu }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn text dark v-on="{ ...tooltip, ...menu }">
              <v-icon>mdi-cart</v-icon>
              <v-badge content="0" color="red darken-4" inline></v-badge>
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
    <v-btn text dark href="/#/signin">Sign In</v-btn>
    <v-btn text dark href="/#/join">Join</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => {
    return {
      items: [
        { title: "Item 1" },
        { title: "Item 2" },
        { title: "Item 3" },
        { title: "Item 4" }
      ]
    };
  }
};
</script>

<style scoped>
</style>