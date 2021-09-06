import Vue from 'vue';
import VueRouter from 'vue-router';

// 1.应用插件
Vue.use(VueRouter);

import Home from '@/views/home.vue';
import About from '@/views/about.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
];

// 2.创建实例
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

export default router;
