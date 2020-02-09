<template>
<div class="container">
<div class="row">
  <div class="card col-lg-3" style="width: 18rem" v-for="item in products" :key="item.id">
    <img class="card-img-top" :src="item.image" :alt="item.image_title" />
    <div class="card-body">
      <h5 class="card-title">{{item.name}}</h5>
      <p class="card-text">{{item.description}}</p>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ["products"]
};
</script>

<style scoped>
</style>