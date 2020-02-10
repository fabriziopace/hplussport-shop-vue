<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6 mb-4" v-for="item in products" :key="item.id">
        <div class="card h-100 animated fadeInLeft">
          <a href="#">
            <img class="card-img-top" :src="item.image" :alt="item.image_title" />
          </a>
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <p class="card-text">{{item.description}}</p>
          </div>
          <div class="card-footer">
            <p class="text-muted">{{item.price}}</p>
          </div>
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