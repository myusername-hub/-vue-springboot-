<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CapitalNav from '@/views/Capital/Capitalnav.vue'
import txImg from '@/assets/images/tx.jpg'

interface Reply {
  user: string
  avatar: string
  text: string
  date: string
}
interface Comment {
  user: string
  avatar: string
  text: string
  date: string
  likes: number
  replies: Reply[]
}

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

const myAvatar = txImg // 你的头像
const myName = 'Cheems'
const commentInput = ref('')
const comments = ref<Comment[]>([
  { user: 'Alice', avatar: txImg, text: '写得真棒！', date: '2024-06-10 10:01', likes: 0, replies: [] },
  { user: 'Bob', avatar: txImg, text: '受教了，感谢分享。', date: '2024-06-10 10:05', likes: 0, replies: [] }
])

const replyInput = ref('')
const replyIndex = ref(-1)

const likeComment = (idx: number) => {
  comments.value[idx].likes++
}

const showReplyInput = (idx: number) => {
  replyIndex.value = replyIndex.value === idx ? -1 : idx
  replyInput.value = ''
}

const submitReply = (idx: number) => {
  if (!replyInput.value.trim()) return
  const now = new Date()
  const date = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`
  comments.value[idx].replies.push({ user: myName, avatar: myAvatar, text: replyInput.value, date })
  replyInput.value = ''
  replyIndex.value = -1
}

const submitComment = () => {
  if (!commentInput.value.trim()) return
  const now = new Date()
  const date = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`
  comments.value.unshift({ user: myName, avatar: myAvatar, text: commentInput.value, date })
  commentInput.value = ''
}

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
      <!-- 基础评论区 -->
      <div class="comments-section">
        <div v-for="(c, i) in comments" :key="i" class="comment-item">
          <img class="comment-avatar" :src="c.avatar" alt="" />
          <div class="comment-main">
            <div class="comment-user">{{ c.user }}</div>
            <div class="comment-text">{{ c.text }}</div>
            <div class="comment-date">{{ c.date }}</div>
            <div class="comment-actions">
              <span class="like-btn" @click="likeComment(i)">
                <i class="iconfont icon-dianzan"></i> {{ c.likes }}
              </span>
              <span class="reply-btn" @click="showReplyInput(i)">
                <i class="iconfont icon-review"></i> 回复
              </span>
            </div>
            <!-- 回复输入框 -->
            <div v-if="replyIndex === i" class="reply-input-bar">
              <input 
                v-model="replyInput" 
                @keyup.enter="submitReply(i)" 
                type="text" 
                :placeholder="`回复 ${comments[i].user}...`" 
              />
              <button @click="submitReply(i)">发布</button>
            </div>
            <!-- 回复列表 -->
            <div v-if="c.replies.length" class="reply-list">
              <div v-for="(r, j) in c.replies" :key="j" class="reply-item">
                <img class="reply-avatar" :src="r.avatar" alt="" />
                <div class="reply-main">
                  <div class="reply-user">{{ r.user }}</div>
                  <div class="reply-text">{{ r.text }}</div>
                  <div class="reply-date">{{ r.date }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="comment-input-bar">
          <img class="my-avatar" :src="myAvatar" alt="" />
          <input v-model="commentInput" @keyup.enter="submitComment" type="text" placeholder="说点什么..." />
          <button @click="submitComment">发布</button>
        </div>
      </div>
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

.comments-section {
  margin-top: 48px;
  padding-bottom: 24px;
  border-top: 1.5px solid #e5e6eb; /* 分界线 */
  padding-top: 32px; 
}
.comment-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 18px;
}
.comment-avatar, .my-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1.5px solid var(--main-light);
}
.comment-main {
  flex: 1;
}
.comment-user {
  font-weight: bold;
  font-size: 15px;
  color: var(--main-deepblue);
}
.comment-text {
  font-size: 14px;
  color: var(--main-dark);
  margin: 4px 0 2px 0;
}
.comment-date {
  font-size: 12px;
  color: var(--main-light);
}
.comment-input-bar {
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 12px;
}
.comment-input-bar input {
  flex: 1;
  height: 36px;
  border: 1px solid #a3bcd5;
  border-radius: 5px;
  padding: 0 12px;
  font-size: 15px;
  outline: none;
}
.comment-input-bar button {
  background: var(--main-blue);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0 18px;
  height: 36px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s;
}
.comment-input-bar button:hover {
  background: var(--main-deepblue);
}
.comment-actions {
  margin-top: 6px;
  font-size: 14px;
  color: var(--main-light);
  display: flex;
  gap: 18px;
}
.comment-actions .iconfont {
  font-size: 18px;
  margin-right: 4px;
  vertical-align: middle;
}
.like-btn, .reply-btn {
  cursor: pointer;
  user-select: none;
  transition: color 0.2s;
}
.like-btn:hover, .reply-btn:hover {
  color: var(--main-blue);
}
.reply-input-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0 0 0;
}
.reply-input-bar input {
  flex: 1;
  height: 32px;
  border: 1px solid #a3bcd5;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 14px;
  outline: none;
}
.reply-input-bar button {
  background: var(--main-blue);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0 14px;
  height: 32px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}
.reply-input-bar button:hover {
  background: var(--main-deepblue);
}
.reply-list {
  margin-top: 10px;
  padding-left: 38px;
}
.reply-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 10px;
}
.reply-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--main-light);
}
.reply-main {
  flex: 1;
}
.reply-user {
  font-weight: bold;
  font-size: 13px;
  color: var(--main-blue);
}
.reply-text {
  font-size: 13px;
  color: var(--main-dark);
  margin: 2px 0 1px 0;
}
.reply-date {
  font-size: 12px;
  color: var(--main-light);
}
</style>