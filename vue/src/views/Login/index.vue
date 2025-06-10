<template>
  <div class="login-bg">
    <div class="login-container">
      <h2>Max工作室</h2>
      <el-form :model="loginForm" class="login-form">
        <el-form-item>
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user" placeholder="用户名" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" placeholder="密码" show-password />
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="loginForm.remember">记住密码</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="handleLogin">登 录</el-button>
        </el-form-item>
        <div class="login-links">
          <el-link type="primary" @click="goRegister">注册</el-link>
          <el-link type="info" @click="goForgot">忘记密码</el-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loginForm = reactive({
  username: '',
  password: '',
  remember: false
})

function handleLogin() {
  // 登录逻辑
  alert('登录功能待实现')
}
function goRegister() {
  router.push('/register')
}
function goForgot() {
  alert('忘记密码功能待实现')
}
</script>

<style scoped>
.login-bg {
  min-height: 100vh;
  background: linear-gradient(120deg, #232526 0%, #414345 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-container {
  background: rgba(0,0,0,0.7);
  padding: 40px 32px 24px 32px;
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
  width: 350px;
  text-align: center;
}
.login-form {
  margin-top: 24px;
}
.login-btn {
  width: 100%;
}
.login-links {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}
</style> 