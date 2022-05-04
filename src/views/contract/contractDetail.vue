<template>
  <div class="container mx-auto shadow-md p-3">
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
            <div class="flex flex-row flex-1">
              <el-input
                placeholder="密码"
                type="text"
                v-model="loginForm.contractId"
                class="flex-1"
              ></el-input>
              <el-button type="primary" class="ml-2">生成</el-button>
            </div>
          </el-form-item></el-col
        >
      </el-row>

      <el-button type="danger" class="w-50 ml-2">登录new</el-button>
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
<style scoped></style>
