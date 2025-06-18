<script setup lang="ts">
// 不需要直接导入CapitalIndex，因为现在通过路由来管理
</script>

<template>
  <router-view />
</template>

<style>
@import './styles/theme.css';

/* 防止页面加载时的闪烁 */
html, body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-primary);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 确保路由切换时的平滑过渡 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-base);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 全局滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-gradient);
  border-radius: var(--radius-sm);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-dark);
}

/* 全局选择文本样式 */
::selection {
  background: var(--primary-color);
  color: var(--text-white);
}

::-moz-selection {
  background: var(--primary-color);
  color: var(--text-white);
}
</style>
