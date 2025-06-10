<script lang="ts">
export default {
  name: 'MyPage',
}
</script>
<script setup lang="ts">
const navItems = [
  { name: '首页', path: '/' },
  { name: '我的', path: '/my' },
]
</script>
<template>
  <nav class="capital-nav">
    <ul>
      <li v-for="item in navItems" :key="item.path">
        <a :href="item.path">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.capital-nav {
  background: #f5f5f5;
  padding: 10px 20px;
  border-bottom: 1px solid #e0e0e0;
}
.capital-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 24px;
}
.capital-nav li {
  display: inline;
}
.capital-nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.2s;
}
.capital-nav a:hover {
  color: #1976d2;
}
</style>
