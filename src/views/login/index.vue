<template>
  <div class="login-container">
    <div class="logform">
      <div class="loginTitle">
        <h3>用户登录</h3>
      </div>
      <el-form ref="form">
        <span class="svgContainer">
          <el-icon>
            <Avatar />
          </el-icon>
        </span>
        <el-form-item>
          <el-input placeholder="账号" type="text"></el-input>
        </el-form-item>
      </el-form>
      <el-form ref="form">
        <span class="passwordContainer">
          <el-icon>
            <Avatar />
          </el-icon>
        </span>
        <el-form-item>
          <el-input placeholder="密码" type="password"></el-input>
        </el-form-item>
        <span class="passwordIcon">
          <el-icon>
            <Avatar />
          </el-icon>
        </span>
      </el-form>
      <el-button type="primary">登录</el-button>
    </div>
  </div>
</template>
<script setup>
import { Avatar } from '@element-plus/icons'
// element-plus中，使用icom组件，可以直接在setup标签中引入后使用
</script>
<style lang="scss" scoped></style>
