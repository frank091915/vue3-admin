<template>
  <div class="paddingWrapper">
    <div class="sectionTitle">
      <span>合同信息表单</span>
    </div>
    <div class="sep-line"></div>
    <el-form
      class="login-form"
      ref="loginFormRef"
      :model="loginForm"
      :rules="rules"
      label-position="top"
    >
      <el-row>
        <el-col :span="11">
          <el-form-item prop="username" label="合同名称" required>
            <el-input
              placeholder="账号"
              type="text"
              v-model="loginForm.username"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="11" :offset="2">
          <el-form-item prop="contractId" label="合同ID" required>
            <el-input
              placeholder="密码"
              type="text"
              v-model="loginForm.contractId"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>

      <el-button type="primary" style="width: 100%">登录</el-button>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 表单数据源
const loginForm = ref({
  username: 'super-admin',
  contractId: '123456'
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
      message: '请输入6到10位密码'
    }
  ]
})
</script>

<style lang="scss" scoped></style>
