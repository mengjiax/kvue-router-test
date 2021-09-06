export default {
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
};
