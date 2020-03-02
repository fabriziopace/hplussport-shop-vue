<template>
  <div class="container mx-auto">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="item in products" :key="item.id" cols="12" xs="6" sm="4" md="3" lg="2">
          <v-card>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">{{item.name}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-img :src="item.image" class="white--text align-end" height="200px"></v-img>
            <!-- <v-card-text>{{item.description}}</v-card-text> -->
            <v-card-actions>
              <v-chip class="mr-2" color="red lighten-1" dark>
                <v-icon left small>euro_symbol</v-icon>
                {{parseInt(item.price).toFixed(2)}}
              </v-chip>
              <v-spacer></v-spacer>
              <v-btn icon v-on:click="cart.push(item)">
                <v-icon>add_shopping_cart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-fab-transition>
        <v-btn
          fab
          color="red darken-1"
          v-scroll="onScrollBtn"
          v-show="showBtnScrollUp"
          @click="goToTop"
          dark
          fixed
          right
          bottom
        >
          <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
      </v-fab-transition>
      <v-snackbar v-model="snackbar.visible" bottom :timeout="snackbar.timeout">
        {{ snackbar.text }}
        <v-btn dark text @click="snackbar.visible = false">Close</v-btn>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: ["products"],
  data: () => {
    return {
      cart: [],
      showBtnScrollUp: false,
      snackbar: {
        visible: false,
        timeout: 1500,
        text: ""
      }
    };
  },
  watch: {
    cart: function() {
      this.productAddedMessage();
      this.$emit("addCart", this.cart);
    }
  },
  methods: {
    goToTop: function() {
      this.$vuetify.goTo(0);
    },
    onScrollBtn: function(event) {
      this.showBtnScrollUp =
        (window.pageYOffset || event.target.scrollTop || 0) > 40;
    },
    productAddedMessage: function() {
      this.snackbar.visible = true;
      this.snackbar.text = "Product added to the cart.";
    }
  }
};
</script>

<style scoped>
</style>