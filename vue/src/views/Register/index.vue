<template>
  <div class="register-bg">
    <div class="register-container">
      <h2>注册账号</h2>
      <el-form :model="registerForm" class="register-form">
        <el-form-item>
          <el-input v-model="registerForm.username" prefix-icon="el-icon-user" placeholder="用户名" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="registerForm.password" prefix-icon="el-icon-lock" placeholder="密码" show-password />
        </el-form-item>
        <el-form-item>
          <el-input v-model="registerForm.confirm" prefix-icon="el-icon-lock" placeholder="确认密码" show-password />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="register-btn" @click="handleRegister">注 册</el-button>
        </el-form-item>
        <div class="register-links">
          <el-link type="info" @click="goLogin">返回登录</el-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const registerForm = reactive({
  username: '',
  password: '',
  confirm: ''
})

function handleRegister() {
  // 注册逻辑
  if (registerForm.password !== registerForm.confirm) {
    alert('两次输入的密码不一致')
    return
  }
  alert('注册功能待实现')
}
function goLogin() {
  router.push('/login')
}
</script>

<style scoped>
.register-bg {
  min-height: 100vh;
  background: linear-gradient(120deg, #232526 0%, #414345 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-container {
  background: rgba(0,0,0,0.7);
  padding: 40px 32px 24px 32px;
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
  width: 350px;
  text-align: center;
}
.register-form {
  margin-top: 24px;
}
.register-btn {
  width: 100%;
}
.register-links {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}
</style> 