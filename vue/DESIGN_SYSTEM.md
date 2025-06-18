# Max工作室设计系统

## 主色调

我们使用蓝色作为主色调，营造专业、信任和创新的品牌形象。采用柔和的蓝色渐变，避免过于鲜艳的色彩。

### 颜色规范

- **主色调**: `#4a90e2` (柔和蓝色)
- **辅助色**: `#357abd` (深蓝色)
- **渐变**: `linear-gradient(135deg, #4a90e2 0%, #357abd 100%)`

### 颜色变量

```css
:root {
  --primary-gradient: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
  --primary-color: #4a90e2;
  --primary-dark: #357abd;
  --primary-light: #6ba3e8;
  --secondary-color: #5c6ac4;
}
```

## 设计原则

### 1. 现代化设计
- 使用毛玻璃效果 (backdrop-filter)
- 柔和的阴影和圆角
- 渐变背景和按钮

### 2. 用户体验
- 清晰的视觉层次
- 直观的交互反馈
- 响应式设计

### 3. 一致性
- 统一的颜色系统
- 标准化的间距和字体
- 一致的组件样式

### 4. 色彩平衡
- 避免过于鲜艳的色彩
- 使用柔和的蓝色主色调
- 保持视觉舒适度

## 组件规范

### 按钮
- 使用渐变背景
- 悬停时有上移动画
- 圆角设计 (12px)

### 输入框
- 半透明背景
- 聚焦时有蓝色边框和阴影
- 统一的圆角设计

### 卡片
- 毛玻璃效果
- 柔和的阴影
- 圆角设计 (20px)

## 响应式设计

- **桌面端**: 最大宽度 420px
- **移动端**: 自适应布局，最小宽度 320px
- **断点**: 480px

## 动画效果

- **过渡时间**: 0.3s ease
- **悬停效果**: translateY(-2px)
- **加载状态**: 旋转动画

## 字体规范

- **主标题**: 28px, 700 weight
- **副标题**: 14px, 400 weight
- **正文**: 16px, 400 weight
- **小字**: 14px, 400 weight

## 间距系统

- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 40px
- **3xl**: 48px

## 使用指南

### 在组件中使用主题变量

```vue
<template>
  <div class="custom-component">
    <button class="btn-primary">按钮</button>
    <input class="input-custom" />
    <div class="card">卡片内容</div>
  </div>
</template>

<style scoped>
.custom-component {
  /* 使用主题变量 */
  background: var(--primary-gradient);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
}
</style>
```

### 添加新的颜色

在 `src/styles/theme.css` 中添加新的颜色变量：

```css
:root {
  --new-color: #your-color;
}
```

## 更新日志

### v1.1.0 (2024-01-XX)
- 调整主色调为更柔和的蓝色
- 优化色彩平衡，避免过于鲜艳
- 更新阴影和边框颜色

### v1.0.0 (2024-01-XX)
- 建立基础设计系统
- 实现登录和注册页面
- 定义主色调和组件规范 