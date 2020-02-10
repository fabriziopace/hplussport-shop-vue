import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import 'bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.css';

import {
    faShoppingCart,
    faDollarSign
} from '@fortawesome/free-solid-svg-icons';

import Home from './components/Home.vue';
import Product from './components/Product.vue';
import Cart from './components/Cart.vue';
import Checkout from './components/Checkout.vue';

library.add(faShoppingCart, faDollarSign);

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
    routes: [{
            path: '*',
            component: Home
        },
        {
            path: '/product/:id',
            component: Product
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/checkout',
            component: Checkout
        }
    ]
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');