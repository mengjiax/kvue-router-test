<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  provide() {
    return {
      form: this,
    }; //把自己传下去，这样就不用一个一个传下去了
  }, //提供
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  methods: {
    validate(cb) {
      // 获取所有孩子KFormItem
      // [resultPromise]
      const tasks = this.$children
        .filter((item) => item.prop) //过滤掉没有prop属性的
        .map((item) => item.validate());

      // 统一处理所有promise结果
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => {
          cb(false);
        });
    },
  },
};
</script>
<style lang="scss" scoped></style>
