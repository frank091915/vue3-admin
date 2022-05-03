<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="loginFormRef"
      :model="loginForm"
      :rules="rules"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <el-input
          placeholder="账号"
          type="text"
          v-model="loginForm.username"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="密码"
          :type="inputType"
          v-model="loginForm.password"
        ></el-input>
      </el-form-item>
      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%"
        @click="handleClick"
        >登录</el-button
      >
    </el-form>
  </div>
</template>
<script setup>
// element-plus中，使用icom组件，可以直接在setup标签中引入后使用
import { validatePass } from '@/utils/rules'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
// 表单数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})
// 检验规则
const rules = ref({
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  password: [
    {
      trigger: 'blur',
      validator: validatePass
    }
  ]
})

const isPasswordType = ref(true)
const inputType = computed(() => (isPasswordType.value ? 'password' : 'input'))
const loading = ref(false)

// 获取ref
const loginFormRef = ref(null)

// 获取store
const store = useStore()
function handleClick() {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      loading.value = true
      // 触发user模块下的login action
      store
        .dispatch('user/login', loginForm.value)
        .then((res) => {
          loading.value = false
        })
        .catch((error) => {
          console.log(error)
          loading.value = false
        })
    }
  })
}
</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_grey: #889aa4;
$light_grey: #eee;
$cursor: #fff;
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    // ::v-deep 深度选择器，可以指定子组件内的样式
    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    ::v-deep .el-input {
      display: inline-block;
      width: 85%;
      height: 47px;
      input {
        background-color: transparent;
        border: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_grey;
        caret-color: $cursor;
      }
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_grey;
      vertical-align: middle;
      display: inline-block;
    }

    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        color: $light_grey;
        margin: 0 auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }

    .show-password {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_grey;
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
