<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CapitalNav from '@/views/Capital/Capitalnav.vue'

const route = useRoute()
const articleId = ref(Number(route.params.id))

// 文章详情数据
const articleDetail = ref({
  id: 0,
  title: '',
  content: '',
  date: '',
  author: 'Cheems',
  views: 0,
  likes: 0,
  comments: 0
})

// 根据标题生成相关内容的函数
const generateContent = (title: string) => {
  const contentMap: { [key: string]: string } = {
    'Vue3 + TS 实战入门': `# Vue3 + TypeScript 开发指南

## 1. 环境搭建
首先需要安装 Node.js 和 npm，然后使用 Vue CLI 创建项目：
\`\`\`bash
npm create vue@latest
\`\`\`

## 2. TypeScript 配置
在 tsconfig.json 中配置 TypeScript：
\`\`\`json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true
  }
}
\`\`\`

## 3. 组件开发
使用组合式 API 和 TypeScript：
\`\`\`typescript
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0)
    return { count }
  }
})
\`\`\`

## 4. 类型定义
为 props 和事件定义类型：
\`\`\`typescript
interface Props {
  title: string
  count?: number
}

defineProps<Props>()
\`\`\`

## 5. 最佳实践
- 使用 TypeScript 的类型推导
- 合理使用接口和类型
- 保持代码简洁清晰`,

    'SpringBoot RESTful API设计': `# SpringBoot RESTful API 设计指南

## 1. RESTful 原则
- 使用 HTTP 方法表示操作
- 使用 URL 表示资源
- 使用 HTTP 状态码表示结果

## 2. 控制器设计
\`\`\`java
@RestController
@RequestMapping("/api/v1/articles")
public class ArticleController {
    @GetMapping("/{id}")
    public ResponseEntity<Article> getArticle(@PathVariable Long id) {
        // 实现获取文章逻辑
    }
    
    @PostMapping
    public ResponseEntity<Article> createArticle(@RequestBody Article article) {
        // 实现创建文章逻辑
    }
}
\`\`\`

## 3. 统一响应格式
\`\`\`java
public class ApiResponse<T> {
    private int code;
    private String message;
    private T data;
}
\`\`\`

## 4. 异常处理
\`\`\`java
@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse> handleException(Exception e) {
        // 统一异常处理
    }
}
\`\`\`

## 5. 接口文档
使用 Swagger 或 SpringDoc 生成 API 文档`,

    '前端性能优化技巧': `# 前端性能优化实战指南

## 1. 资源加载优化
- 使用 CDN 加速
- 图片懒加载
- 资源预加载

## 2. 代码优化
\`\`\`javascript
// 使用防抖
function debounce(fn, delay) {
  let timer = null
  return function() {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

// 使用节流
function throttle(fn, delay) {
  let last = 0
  return function() {
    const now = Date.now()
    if (now - last > delay) {
      fn.apply(this, arguments)
      last = now
    }
  }
}
\`\`\`

## 3. 缓存策略
- 合理使用浏览器缓存
- 使用 Service Worker
- 实现离线功能

## 4. 渲染优化
- 使用虚拟列表
- 避免重排重绘
- 使用 CSS 动画代替 JS 动画

## 5. 监控与分析
- 使用性能监控工具
- 分析用户行为
- 持续优化改进`
  }

  return contentMap[title] || '文章内容加载中...'
}

// 模拟获取文章详情
onMounted(() => {
  // 这里模拟从后端获取数据
  const articles = [
    {
      id: 1,
      title: 'Vue3 + TS 实战入门',
      date: '2024-06-01'
    },
    {
      id: 2,
      title: 'SpringBoot RESTful API设计',
      date: '2024-06-02'
    },
    {
      id: 3,
      title: '前端性能优化技巧',
      date: '2024-06-03'
    }
  ]

  const article = articles.find(a => a.id === articleId.value)
  if (article) {
    articleDetail.value = {
      ...article,
      content: generateContent(article.title),
      views: Math.floor(Math.random() * 1000),
      likes: Math.floor(Math.random() * 100),
      comments: Math.floor(Math.random() * 50)
    }
  }
})
</script>

<template>
  <div class="detail-page">
    <CapitalNav />
    <div class="article-container" v-if="articleDetail.id">
      <div class="article-header">
        <h1>{{ articleDetail.title }}</h1>
        <div class="article-meta">
          <span>作者：{{ articleDetail.author }}</span>
          <span>发布时间：{{ articleDetail.date }}</span>
          <span>阅读：{{ articleDetail.views }}</span>
          <span>点赞：{{ articleDetail.likes }}</span>
          <span>评论：{{ articleDetail.comments }}</span>
        </div>
      </div>
      <div class="article-content" v-html="articleDetail.content"></div>
    </div>
    <div v-else class="not-found">
      文章不存在或已被删除
    </div>
  </div>
</template>

<style scoped>
.detail-page {
  background: var(--main-bg);
  min-height: 100vh;
  width: 100%;
}

.article-container {
  width: 95vw;
  margin: 24px auto;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px #0001;
  box-sizing: border-box;
}

.article-header {
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;
}

.article-header h1 {
  color: var(--main-deepblue);
  font-size: 28px;
  margin-bottom: 16px;
}

.article-meta {
  display: flex;
  gap: 16px;
  color: var(--main-light);
  font-size: 14px;
}

.article-content {
  line-height: 1.8;
  color: var(--main-dark);
}

.article-content :deep(h1) {
  font-size: 24px;
  color: var(--main-deepblue);
  margin: 24px 0 16px;
}

.article-content :deep(h2) {
  font-size: 20px;
  color: var(--main-blue);
  margin: 20px 0 14px;
}

.article-content :deep(p) {
  margin: 12px 0;
}

.article-content :deep(pre) {
  background: #f5f7fa;
  padding: 16px;
  border-radius: 4px;
  overflow-x: auto;
  margin: 16px 0;
}

.article-content :deep(code) {
  font-family: monospace;
  background: #f5f7fa;
  padding: 2px 4px;
  border-radius: 4px;
}

.not-found {
  text-align: center;
  padding: 48px;
  color: var(--main-light);
  font-size: 16px;
}
</style> 