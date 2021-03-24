 
require('./bootstrap');

window.Vue = require('vue');
import axios from "axios";
import VueAxios from "vue-axios";
import 'vuetify/dist/vuetify.min.css'
import Vuetify from "../plugins/vuetify";
import Loading from "vue-loading-overlay";
import VueRouter from 'vue-router'
Vue.component('app-component', require('./components/AppContainer.vue').default);
Vue.component('dashboard-component', require('./components/DashBoard.vue').default);
Vue.component('video-player', require('./components/VideoPlayer.vue').default);
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
const VideoLinks = () => import("./components/Video_Links.vue");
const ProductLinks = () => import("./components/Product_List.vue");
const CreateProduct = () => import("./components/Product_Create.vue");
const routes = [
    { name:'ListProduct',path: '/product_list', component: ProductLinks },
    { name:'ListProduct',path: '/', component: ProductLinks },
    { name:'CreateProduct',path: '/product_create', component: CreateProduct },
    { name:'VideoLink',path: '/video_links', component: VideoLinks },
  ]


  const router = new VueRouter({
    routes // short for `routes: routes`
  })
  
const app = new Vue({
    router,
    vuetify: Vuetify,
    el: '#app', 
});
