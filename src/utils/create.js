import Vue from 'vue';

function create(Component, props) {
  // 组件构造函数如何获取？
  // 1.Vue.extend()//获取到构造函数
  // 2.render
  const vm = new Vue({
    // h是createElement,返回VNode,是虚拟dom
    // 需要挂载才能变成真实dom
    render: (h) => h(Component, { props }),
  }).$mount(); // 不指定宿主元素，则会创建真实dom,但是不会追加操作

  // 获取真实dom  vm.$el
  document.body.appendChild(vm.$el);

  const comp = vm.$children[0];
  return comp;
}

export default create;
