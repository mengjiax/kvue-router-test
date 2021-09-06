import Link from './krouter-link';
import View from './krouter-view';

let Vue;

// 任务1.实现一个插件：就是挂载$router

class KVueRouter {
  constructor(options) {
    this.$options = options;

    // 需要创建响应式的current属性
    // 利用vue提供的defineReactive做响应化
    // 这样将来current变化的时候，依赖的组件会重新render
    Vue.util.defineReactive(this, 'current', '/');
    this.current = '/';

    // 监控url变化
    window.addEventListener('hashchange', this.onHashChange.bind(this));
    window.addEventListener('load', this.onHashChange.bind(this));

    // 创建一个路由映射表
    this.routeMap = {};
    options.routes.forEach((route) => {
      this.routeMap[route.path] = route;
    });
  }

  onHashChange() {
    // console.log('window.location.hash', window.location.hash);
    this.current = window.location.hash.slice(1);
  }
}

KVueRouter.install = function(_Vue) {
  // 保存构造函数，在KVueRouter里面使用
  Vue = _Vue;

  // 挂载$router
  // 怎么获取根实例中的router选项
  // 混入能获取到实例
  Vue.mixin({
    beforeCreate() {
      // console.log(this); //this能拿到实例

      // 确保根实例的时候才执行
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    },
  });

  // 任务2：实现两个全局组件router-link和router-view
  Vue.component('router-link', Link);
  Vue.component('router-view', View);
};

export default KVueRouter;
