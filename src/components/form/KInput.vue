<template>
  <div>
    <!-- 自定义组件双向绑定： :value @input -->
    <!-- v-bind="$attrs"展示$attrs -->
    <input :value="value" type="type" @input="onInput" v-bind="$attrs" />
  </div>
</template>
<script>
export default {
  inheritAttrs: false, //设置false 避免attrs设置到根元素上
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    onInput(e) {
      // 派发一个input事件即可
      this.$emit('input', e.target.value);

      // 通知父级执行校验
      this.$parent.$emit('validate');
    },
  },
};
</script>
<style lang="scss" scoped></style>
