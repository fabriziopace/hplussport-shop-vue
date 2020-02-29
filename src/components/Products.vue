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
                <v-icon left small>euro_symbol</v-icon>{{parseInt(item.price).toFixed(2)}}
              </v-chip>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>add_shopping_cart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: ["products"]
};
</script>

<style scoped>
</style>