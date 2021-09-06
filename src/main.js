import Vue from 'vue';
import App from './App.vue';

import create from '@/utils/create.js';
// import router from '@/router';
import router from '@/krouter';

Vue.config.productionTip = false;
Vue.prototype.$create = create;

new Vue({
  router, //3.挂载 vue.prototype.$router
  render: (h) => h(App),
}).$mount('#app');
