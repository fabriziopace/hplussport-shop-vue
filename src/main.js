import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Products from './components/Products.vue';
import Checkout from './components/Checkout.vue';
import Signin from './components/Signin.vue';
import Join from './components/Join.vue';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [{
    path: '*',
    component: Products
  },
  {
    path: '/checkout',
    component: Checkout
  },
  {
    path: '/signin',
    component: Signin
  },
  {
    path: '/join',
    component: Join
  }]
});

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
