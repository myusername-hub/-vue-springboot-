<template>
  <div class="register-page" :style="{ '--bg-image': `url(${bgImg})` }">
    <div class="register-container">
      <div class="register-header">
        <h1>注册</h1>
      </div>
      
      <form class="register-form" @submit.prevent="handleRegister">
        <div class="form-row">
          <label>用户名</label>
          <div class="input-wrapper">
            <input 
              v-model="registerForm.username" 
              type="text"
              placeholder="请输入用户名"
            />
          </div>
        </div>
        
        <div class="form-row">
          <label>邮箱</label>
          <div class="input-wrapper">
            <input 
              v-model="registerForm.email" 
              type="email"
              placeholder="请输入邮箱" 
            />
          </div>
        </div>
        
        <div class="form-row">
          <label>密码</label>
          <div class="input-wrapper">
            <input 
              v-model="registerForm.password" 
              type="password"
              placeholder="请输入密码" 
            />
          </div>
        </div>
        
        <div class="form-row">
          <label>确认密码</label>
          <div class="input-wrapper">
            <input 
              v-model="registerForm.confirmPassword" 
              type="password"
              placeholder="请再次输入密码" 
            />
          </div>
        </div>
        
        <div class="form-row">
          <label class="checkbox-wrapper">
            <input type="checkbox" v-model="registerForm.agree">
            <span>我已阅读并同意 <a href="javascript:;" @click="showAgreement">服务协议</a></span>
          </label>
        </div>
        
        <div class="form-row">
          <button type="submit" class="submit-btn">
            注册
          </button>
        </div>
        
        <div class="form-row links">
          <a href="javascript:;" @click="goLogin">已有账号？立即登录</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import bgImg from '@/assets/images/dlzc.jpg'

const router = useRouter()

const registerForm = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  agree: false
})

function handleRegister() {
  // 表单基础校验
  if (!registerForm.username || !registerForm.email || !registerForm.password || !registerForm.confirmPassword) {
    alert('请填写完整注册信息')
    return
  }
  if (!registerForm.agree) {
    alert('请阅读并同意服务协议')
    return
  }
  if (registerForm.password !== registerForm.confirmPassword) {
    alert('两次输入的密码不一致')
    return
  }
  
  // 从localStorage获取用户列表，如果没有则初始化为空数组
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  
  // 检查用户名是否已存在
  const userExists = users.some((user: any) => user.username === registerForm.username)
  if (userExists) {
    alert('用户名已存在')
    return
  }
  
  // 创建新用户
  const newUser = {
    username: registerForm.username,
    email: registerForm.email,
    password: registerForm.password // 注意：实际项目中密码需要加密存储
  }
  
  // 添加新用户并存回localStorage
  users.push(newUser)
  localStorage.setItem('users', JSON.stringify(users))
  
  // 注册成功，直接跳转
  router.push('/login')
}

function goLogin() {
  router.push('/login')
}

function showAgreement() {
  alert('服务协议待完善')
}
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background-color: #274769;
}

.register-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: var(--bg-image);
  background-size: cover;
  background-position: center;
  opacity: 1;
  z-index: -1;
}

.register-container {
  background: rgba(243, 246, 250, 0.9); /* 增加一点背景色透明度以适应背景图 */
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.register-header {
  text-align: center;
  margin-bottom: 30px;
}

.register-header h1 {
  font-size: 24px;
  color: #333;
  margin: 0 0 8px 0;
}

.register-header p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-row label {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

.input-wrapper {
  position: relative;
  width: 100%;
}

.input-wrapper input {
  width: 100%;
  height: 40px;
  padding: 0 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background: white;
  transition: all 0.3s;
}

.input-wrapper input:hover,
.input-wrapper input:focus {
  border-color: #8bb8f0;
  box-shadow: 0 0 0 2px rgba(139, 184, 240, 0.2);
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.checkbox-wrapper input[type="checkbox"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.checkbox-wrapper span {
  font-size: 14px;
  color: #333;
}

.checkbox-wrapper a {
  color: #8bb8f0;
}

.checkbox-wrapper a:hover {
  color: #6ba3e8;
}

.submit-btn {
  width: 100%;
  height: 40px;
  background: #5f9ce7;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.submit-btn:hover {
  background: #5093e6;
}

.links {
  text-align: center;
}

.links a {
  color: #5f9ce7;
  text-decoration: none;
  font-size: 14px;
}

.links a:hover {
  color: #5093e6;
}

@media (max-width: 480px) {
  .register-container {
    padding: 30px 20px;
  }
}
</style>