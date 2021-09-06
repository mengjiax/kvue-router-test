let Vue;

// 任务1.实现一个插件：就是挂载$router
// sd
class KVueRouter {
  constructor(options) {
    this.$options = options;

    // 需要创建响应式的current属性
    Vue.util.defineReactive(this, 'current', '/'); //利用vue提供的一个响应式工具  render函数只要用到响应式数据，就会被依赖调用收集起来，将来一定会被调用
    this.current = '/';

    // 监控url变化
    window.addEventListener('hashchange', this.onHashChange.bind(this));

    window.addEventListener('load', this.onHashChange.bind(this));
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
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        require: true,
      },
    },
    // 在存运行时环境只能使用render函数来描述
    render(h) {
      // h(tag,data,children)
      // console.log(this.$slots) this.$slots.default默认插槽
      return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default);
    },
  });
  Vue.component('router-view', {
    render(h) {
      // 获取path对应的component
      let component = null;
      this.$router.$options.routes.forEach((route) => {
        if (route.path === this.$router.current) {
          component = route.component;
        }
      });
      return h(component);
    },
  });
};

export default KVueRouter;
