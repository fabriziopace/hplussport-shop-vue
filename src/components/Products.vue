<template>
  <div class="container">
    <v-card class="d-inline-block mx-auto" v-for="item in products" :key="item.id">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img height="200" width="200" :src="item.image" :alt="item.image_title"></v-img>
          </v-col>
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>

              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>

              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
    props: ["products"]
}
</script>

<style scoped>

</style>