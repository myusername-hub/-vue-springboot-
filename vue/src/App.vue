<script setup lang="ts">
// 不需要直接导入CapitalIndex，因为现在通过路由来管理
</script>

<template>
  <router-view />
</template>

<style>
/* 防止页面加载时的闪烁 */
html, body {
  margin: 0;
  padding: 0;
  background-color: var(--main-bg);
}

/* 确保路由切换时的平滑过渡 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
