<script lang="ts">
export default {
  name: 'CapitalNav',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
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
        <input v-model="searchText" type="text" placeholder="搜索…" />
        <button type="submit">搜索</button>
      </form>
      <div class="avatar">
        <img src="../../assets/images/R-C.jpg" alt="" />
      </div>
    </div>
  </nav>
</template>
<style scoped>
.capital-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}
.nav-left {
  display: flex;
  align-items: center;
  flex: 1;
}
.nav-auth {
  margin-right: 20px;
  color: #1976d2;
  font-weight: bold;
  white-space: nowrap;
}
.items {
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-auth a {
  color: #1976d2;
  text-decoration: none;
  margin: 0 4px;
}
.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
}
.search-bar {
  display: flex;
  align-items: center;
}
.search-bar input {
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  outline: none;
}
.search-bar button {
  padding: 4px 12px;
  border: 1px solid #1976d2;
  background: #1976d2;
  color: #fff;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}
.avatar img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
