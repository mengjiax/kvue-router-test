import Vue from 'vue';
import App from './App.vue';

import create from '@/utils/create.js';

// import router from '@/router';
import router from '@/krouter';

// import store from './store';
import store from './kstore';

Vue.config.productionTip = false;
Vue.prototype.$create = create;

new Vue({
  //3.挂载 vue.prototype.$router
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
