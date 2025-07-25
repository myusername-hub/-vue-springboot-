<template>
  <div class="login-page" :style="{ '--bg-image': `url(${bgImg})` }">
    <div class="login-container">
      <div class="login-header">
        <h1>登录</h1>
      </div>
      
      <form class="login-form" @submit.prevent="handleLogin">
        <div class="form-row">
          <label>用户名</label>
          <div class="input-wrapper">
            <input 
              v-model="loginForm.username" 
              type="text"
              placeholder="请输入用户名"
            />
          </div>
        </div>
        
        <div class="form-row">
          <label>密码</label>
          <div class="input-wrapper">
            <input 
              v-model="loginForm.password" 
              type="password"
              placeholder="请输入密码" 
            />
          </div>
        </div>
        
        <div class="form-row">
          <label class="checkbox-wrapper">
            <input type="checkbox" v-model="loginForm.remember">
            <span>记住密码</span>
          </label>
        </div>
        
        <div class="form-row">
          <button type="submit" class="submit-btn">
            登录
          </button>
        </div>
        
        <div class="form-row links">
          <a href="javascript:;" @click="goRegister">注册账号</a>
          <a href="javascript:;" @click="goForgot">忘记密码</a>
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

const loginForm = reactive({
  username: '',
  password: '',
  remember: false
})

function handleLogin() {
  if (!loginForm.username || !loginForm.password) {
    alert('请输入用户名和密码')
    return
  }

  // 从localStorage获取用户列表
  let users = []
  const usersJson = localStorage.getItem('users')
  if (usersJson) {
    try {
      users = JSON.parse(usersJson)
    } catch (e) {
      console.error("Error parsing users from localStorage", e)
    }
  }
  
  // 查找用户
  const foundUser = users.find((user: any) => user.username === loginForm.username)
  
  if (!foundUser) {
    alert('用户不存在')
    return
  }
  
  // 验证密码
  if (foundUser.password !== loginForm.password) {
    alert('密码错误')
    return
  }

  // 记录登录状态
  localStorage.setItem('loggedInUser', JSON.stringify(foundUser))
  // 如果勾选了"记住密码"，可以额外处理
  if (loginForm.remember) {
    localStorage.setItem('rememberedUser', loginForm.username)
  } else {
    localStorage.removeItem('rememberedUser')
  }
  
  // 跳转到首页
  router.push('/')
}

function goRegister() {
  router.push('/register')
}

function goForgot() {
  alert('忘记密码功能待实现')
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.login-page::before {
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

.login-container {
  background: rgba(243, 246, 250, 0.9);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-header h1 {
  font-size: 24px;
  color: #333;
  margin: 0 0 8px 0;
}

.login-header p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.login-form {
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

.submit-btn {
  width: 100%;
  height: 40px;
  background: #5f9ce7;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
}

.submit-btn:hover {
  background: #5093e6;
}

.links a {
  color: #5f9ce7;
  text-decoration: none;
  font-size: 14px;
}

.links a:hover {
  color: #5093e6;
}

/* 响应式 */
@media (max-width: 480px) {
  .login-container {
    padding: 30px 20px;
  }
  
  .links {
    flex-direction: column;
    gap: 10px;
  }
}
</style>