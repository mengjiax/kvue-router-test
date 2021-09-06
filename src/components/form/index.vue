<template>
  <div>
    <KForm :model="userInfo" :rules="rules" ref="loginForm">
      <!-- 用户名 -->
      <KFormItem label="用户名" prop="username"><KInput v-model="userInfo.username" placeholder="请输入用户名"></KInput></KFormItem>
      <!-- 密码 -->
      <KFormItem label="密码" prop="password"><KInput v-model="userInfo.password" type="password" placeholder="请输入密码"></KInput></KFormItem>
      <!-- 提交按钮 -->
      <KFormItem>
        <button @click="login">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>
<script>
import KInput from '@/components/form/KInput.vue';
import KFormItem from '@/components/form/KFormItem.vue';
import KForm from '@/components/form/KForm.vue';
export default {
  components: {
    KInput,
    KFormItem,
    KForm,
  },
  data() {
    return {
      userInfo: {
        username: '张三',
        password: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名称',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
          },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
        } else {
          console.log('校验不通过');
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
