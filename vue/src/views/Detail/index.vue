<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import txImg from '@/assets/images/tx.jpg'

const router = useRouter()
const navItems = [
  { name: '首页', path: '/' },
  { name: '我的', path: '/my' },
]
const userName = ref<string | null>(null) // 未登录为null，登录后赋值用户名
const searchText = ref('')
const onSearch = () => {
  // 这里可以处理搜索逻辑
  alert(`搜索内容：${searchText.value}`)
}
</script>
<template>
  <nav class="capital-nav">
    <div class="nav-left">
      <div class="nav-auth">
        <template v-if="!userName">
          <router-link class="login" to="/login">登录</router-link>
          <router-link class="register" to="/register">注册</router-link>
        </template>
        <template v-else> 欢迎您，{{ userName }} </template>
      </div>
      <ul class="items">
        <li v-for="item in navItems" :key="item.path">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="nav-right">
      <form class="search-bar" @submit.prevent="onSearch">
        <input v-model="searchText" type="text" placeholder="搜索你感兴趣的博客..." />
        <button type="submit"><i class="iconfont icon-sousuo"></i></button>
      </form>
      <div class="avatar">
        <router-link class="avatar" to="/my">
          <img :src="txImg" alt="" />
        </router-link>
        
      </div>
    </div>
  </nav>
  <div class="detail-page">
    <h1>文章详情页</h1>
    <p>文章ID: {{ articleId }}</p>
  </div>
</template>
<style scoped>
.capital-nav {
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: #f7fafd;
  border-bottom: 1.5px solid #557fb0;
}
.nav-left {
  margin-left: 5px;
  display: flex;
  align-items: center;
  flex: 1;
}
.nav-auth {
  margin-right: 20px;
  color: #557fb0;
  font-weight: bold;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 24px;
}
.items {
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-auth a,
.items a {
  font-size: 17px;
  color: #557fb0;
  text-decoration: none;
  font-weight: 500;
  margin: 0;
  padding: 0 8px;
  line-height: 55px;
  display: flex;
  align-items: center;
  background: none !important;
}
.nav-auth a:hover,
.items a:hover {
  color: #315d90;
  background: none !important;
  text-decoration: none;
}
.nav-right {
  display: flex;
  align-items: center;
  gap: 24px;
}
.search-bar {
  display: flex;
  align-items: center;
}
.search-bar input {
  width: 200px;
  height: 30px;
  font-size: 14px;
  padding: 4px 12px;
  border: 1px solid #a3bcd5;
  border-radius: 5px 0 0 5px;
  outline: none;
  background: #fff;
  color: var(--main-dark);
}
/* 设置placeholder字体更小 */
.search-bar input::placeholder {
  font-size: 12px;
  color: var(--main-light);
  opacity: 1;
}
.search-bar button {
  font-size: 18px;
  height: 30px;
  padding: 0 10px;
  background: var(--main-blue);
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-bar button:hover {
  background: #315d90; 
}
.search-bar button i {
  font-size: 20px;
}
.avatar {
  position: relative;
  width: 42px;
  height: 42px;
  margin-left: 20px;
  margin-right: 10px;
  background: none !important;
}
.avatar img {
  position: absolute;
  top: 50%;
  left: 50%;
  top: 20px;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.2s ease;
  border: 1.5px solid #557fb0;
  background: none !important;
}
.avatar img:hover {
  cursor: pointer;
  transform: translate(-50%, -50%) scale(1.05);
  background: none !important;
  box-shadow: none !important;
}
.detail-page {
  padding: 20px;
}
</style>
