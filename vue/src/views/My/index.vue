<script lang="ts">
export default {
  name: 'MyPage',
}
</script>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import CapitalNav from '@/views/Capital/Capitalnav.vue'
import txImg from '@/assets/images/tx.jpg'
import bgImg from '@/assets/images/img4.jpg'

// 用户信息
const userInfo = {
  name: 'Cheems',
  description: '这个人很懒，什么都没有留下...',
  articleCount: 3,
  followCount: 0,
  fansCount: 0
}

// 用户文章列表
const articles = ref([
  {
    id: 1,
    title: 'Vue3 + TS 实战入门',
    date: '2024-06-01',
    views: 128,
    likes: 32
  },
  // ...其他文章
])

const bgHeight = ref(200)
const maxHeight = 800
const minHeight = 200
const isDragging = ref(false)
const startY = ref(0)
const startHeight = ref(200)

const router = useRouter()

// 监听滚动
const handleScroll = () => {
  // 根据向上滚动增加高度,向下滚动减小高度
  const scrollDelta = window.scrollY
  const newHeight = Math.max(minHeight, Math.min(maxHeight, 350 - scrollDelta))
  bgHeight.value = newHeight
}

function handleMouseDown(e: MouseEvent) {
  isDragging.value = true
  startY.value = e.clientY
  startHeight.value = bgHeight.value
}

function handleMouseMove(e: MouseEvent) {
  if (!isDragging.value) return
  const delta = startY.value - e.clientY
  const newHeight = Math.min(500, Math.max(200, startHeight.value + delta))
  bgHeight.value = newHeight
}

function handleMouseUp() {
  isDragging.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleEditProfile = () => {
  router.push('/information')
}
</script>

<template>
  <div class="my-page">
    <CapitalNav />
    
    <!-- 个人信息头部 -->
    <div 
      class="profile-header" 
      :style="{ 
        backgroundImage: `url(${bgImg})`,
        height: `${bgHeight}px`
      }"
      @mousedown="handleMouseDown"
    >
      <div class="expand-hint">
        <i class="expand-arrow"></i>
      </div>
      <div class="profile-info">
        <img :src="txImg" alt="avatar" class="profile-avatar">
        <div class="profile-text">
          <h2>{{ userInfo.name }}</h2>
        </div>
      </div>
    </div>
    
    <!-- 个人信息主体 -->
    <div class="profile-body">
      <div class="profile-actions">
        <div class="stats">
          <div class="stat-item">
            <div class="number">{{ userInfo.articleCount }}</div>
            <div class="label">文章</div>
          </div>
          <div class="stat-item">
            <div class="number">{{ userInfo.followCount }}</div>
            <div class="label">关注</div>
          </div>
          <div class="stat-item">
            <div class="number">{{ userInfo.fansCount }}</div>
            <div class="label">粉丝</div>
          </div>
        </div>
        <button class="edit-btn" @click="handleEditProfile">编辑个人信息</button>
      </div>
      
      <div class="description">{{ userInfo.description }}</div>
      
      <!-- 文章列表 -->
      <div class="articles-section">
        <h3>全部文章</h3>
        <div class="article-list">
          <div v-for="article in articles" :key="article.id" class="article-item">
            <div class="article-info">
              <router-link :to="`/detail/${article.id}`" class="article-title">
                {{ article.title }}
              </router-link>
              <div class="article-meta">
                <span>{{ article.date }}</span>
                <span>阅读 {{ article.views }}</span>
                <span>点赞 {{ article.likes }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-page {
  min-height: 100vh;
  background: #f5f7fa;
}

.profile-header {
  position: relative;
  background-size: cover;
  background-position: center;
  transition: height 0.1s ease;
  cursor: ns-resize;
}

.expand-hint {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 20px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.expand-arrow {
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(255, 255, 255, 0.8);
}

.profile-header:hover .expand-hint {
  background: rgba(255, 255, 255, 0.5);
}

.profile-header:hover .expand-arrow {
  border-top-color: rgba(255, 255, 255, 1);
}

.profile-info {
  position: absolute;
  left: 40px;
  bottom: -40px;
  display: flex;
  align-items: flex-end;
  gap: 20px;
  z-index: 1;
}

/* 添加渐变遮罩 */
.profile-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150px;
  background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.4));
}

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.profile-text {
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  margin-bottom: 10px;
}

.profile-text h2 {
  font-size: 24px;
  font-weight: 600;
}

.profile-body {
  max-width: 1200px;
  margin: 60px auto 0;
  padding: 0 20px;
}

.profile-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.stats {
  display: flex;
  gap: 40px;
}

.stat-item {
  text-align: center;
}

.stat-item .number {
  font-size: 20px;
  font-weight: 600;
  color: var(--main-deepblue);
}

.stat-item .label {
  font-size: 14px;
  color: #666;
}

.edit-btn {
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  background: var(--main-blue);
  color: white;
  cursor: pointer;
}

.edit-btn:hover {
  background: var(--main-deepblue);
}

.description {
  color: #666;
  margin-bottom: 30px;
}

.articles-section {
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.articles-section h3 {
  font-size: 18px;
  color: var(--main-deepblue);
  margin-bottom: 20px;
  font-weight: 600;
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.article-item {
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.article-title {
  font-size: 16px;
  color: var(--main-deepblue);
  text-decoration: none;
  margin-bottom: 8px;
  display: block;
}

.article-meta {
  font-size: 13px;
  color: #999;
  display: flex;
  gap: 15px;
}
</style>
