<script setup lang="ts">
import { ref } from 'vue'
import txImg from '@/assets/images/tx.jpg'
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
          <a class="login" href="/login">登录</a>
          <a class="register" href="/register">注册</a>
        </template>
        <template v-else> 欢迎您，{{ userName }} </template>
      </div>
      <ul class="items">
        <li v-for="item in navItems" :key="item.path">
          <a :href="item.path">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <div class="nav-right">
      <form class="search-bar" @submit.prevent="onSearch">
        <input v-model="searchText" type="text" placeholder="搜索你感兴趣的博客..." />
        <button type="submit"><i class="iconfont icon-sousuo"></i></button>
      </form>
      <div class="avatar">
        <img :src="txImg" alt="" />
      </div>
    </div>
  </nav>
</template>
<style scoped>
.capital-nav {
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: #f7fafd; /* 浅色背景，与主页面区分 */
  border-bottom: 1.5px solid var(--main-blue);
}
.nav-left {
  margin-left: 5px;
  display: flex;
  align-items: center;
  flex: 1;
}
.nav-auth {
  margin-right: 20px;
  color: var(--main-blue);
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
  color: var(--main-blue);
  text-decoration: none;
  font-weight: 500;
  margin: 0;
  padding: 0 8px;
  transition: color 0.2s;
  line-height: 55px;
  display: flex;
  align-items: center;
}
.nav-auth a:hover,
.items a:hover {
  color: var(--main-deepblue);
  background: none;
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
  transition: background 0.2s;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-bar button:hover {
  background: var(--main-deepblue);
}
.search-bar button i {
  font-size: 20px;
}
.avatar img {
  margin-left: 20px;
  margin-right: 10px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
