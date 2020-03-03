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
    <v-menu offset-y :close-on-content-click="false" max-height="500px" min-width="400px">
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
      <v-card>
        <v-list v-if="cart.length>0">
          <v-list-item v-for="(product, index) in cart" :key="index">
            <v-list-item-avatar>
              <img :src="product.image" :alt="product.image_title" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-col cols="9">
                <v-list-item-title>{{ product.name }}</v-list-item-title>
                <v-list-item-subtitle>€ {{parseInt(product.price).toFixed(2)}}</v-list-item-subtitle>
              </v-col>
              <v-col cols="3">
                <v-text-field type="Number" solo dense flat outlined hide-details :value="product.quantity"></v-text-field>
              </v-col>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                elevation="0"
                color="red light-4"
                dark
                fab
                width="15px"
                height="15px"
                @click="removeCart(index)"
              >
                <v-icon size="10" style="margin-top: -4px;">close</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-divider inset="inset"></v-divider>
          <v-container style="padding-bottom:0px;">
            <v-row>
              <v-col cols="9" class="text-right">Subtotal:</v-col>
              <v-col cols="3" class="text-right">
                <strong style="color:#388E3C;">€ {{parseInt(subtotalCart).toFixed(2)}}</strong>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn block color="red darken-1" elevation="0" rounded dark>CHECKOUT</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-list>
        <v-list v-if="cart.length<1">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>No Products</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
    <v-btn text dark href="/#/signin">Sign In</v-btn>
    <v-btn text dark href="/#/join">Join</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  props: ["cart", "subtotalCart"],
  data: () => {
    return {
      searchQuery: ""
    };
  },
  watch: {
    searchQuery: function() {
      this.$emit("searchProducts", this.searchQuery);
    }
  },
  methods: {
    removeCart: function(index) {
      this.cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    }
  }
};
</script>

<style scoped>
</style>