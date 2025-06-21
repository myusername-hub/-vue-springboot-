<script setup lang="ts">
import { ref } from 'vue'
import CapitalNav from './Capitalnav.vue'
import { userInfo, articles, categoryCount, tagCount } from '@/data/userData'
import txImg from '@/assets/images/tx.jpg'
import bgImg from '@/assets/images/bg.jpg'
import Img1 from '@/assets/images/img1.jpg'
import Img2 from '@/assets/images/img2.jpg'
import Img3 from '@/assets/images/img3.jpg'
import Img4 from '@/assets/images/img4.jpg'
import Img5 from '@/assets/images/img5.jpg'

// 文章数据示例
const articles = ref([
  {
    id: 1,
    title: 'Vue3 + TS 实战入门',
    desc: '带你快速上手Vue3和TypeScript开发，适合初学者。',
    img: Img1,
    date: '2024-06-01'
  },
  {
    id: 2,
    title: 'SpringBoot RESTful API设计',
    desc: '如何用SpringBoot优雅地设计RESTful接口。',
    img: Img2,
    date: '2024-06-02'
  },
  {
    id: 3,
    title: '前端性能优化技巧',
    desc: '常见的前端性能优化方法与实践。',
    img: Img3,
    date: '2024-06-03'
  }
])

// 评论数据
const comments = ref<{ user: string; text: string; date: string }[]>([])
// 示例：如需测试有评论可这样赋值
// comments.value = [{ user: 'Cheems', text: '评论内容示例', date: '2023-05-12' }]
</script>
<template>
  <div class="capital-page">
    <CapitalNav />
    <div class="main-content">
      <div class="content-left">
        <!-- 文章列表示例 -->
        <div class="article-card" v-for="item in articles" :key="item.id">
          <div class="article-header">
            <template v-if="item.id % 2 === 1">
              <div class="article-img-wrapper left">
                <img class="article-img" :src="item.img" alt="" />
              </div>
              <div class="article-info">
                <h3><router-link :to="`/detail/${item.id}`">{{ item.title }}</router-link></h3>
                <p class="article-desc">{{ item.desc }}</p>
                <div class="article-date">{{ item.date }}</div>
              </div>
            </template>
            <template v-else>
              <div class="article-info">
                <h3><router-link :to="`/detail/${item.id}`">{{ item.title }}</router-link></h3>
                <p class="article-desc">{{ item.desc }}</p>
                <div class="article-date">{{ item.date }}</div>
              </div>
              <div class="article-img-wrapper right">
                <img class="article-img" :src="item.img" alt="" />
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="content-right">
        <!-- 个人信息卡片 -->
        <div class="profile-card">
          <img class="profile-avatar" :src="txImg" alt="" />
          <div class="profile-name">{{ userInfo.name }}</div>
          <div class="profile-desc">{{ userInfo.description }}</div>
          <div class="profile-stats">
            <span>{{ articles.length }} 文章</span>
            <span>{{ categoryCount }} 分类</span>
            <span>{{ tagCount }} 标签</span>
          </div>
        </div>
        <!-- 公告 -->
        <div class="notice-card">
          <div class="notice-title">公告</div>
          <div class="notice-content">后端基于SpringBoot开发，前端基于Vue3 Ts Naive UI开发！</div>
        </div>
        <!-- 最新评论 -->
        <div class="comments-card">
          <div class="comments-title">最新评论</div>
          <template v-if="comments.length === 0">
            <div style="color: var(--main-light);text-align:center;padding:12px 0;">暂无评论</div>
          </template>
          <template v-else>
            <div class="comment-item" v-for="(c, i) in comments" :key="i">
              <img class="comment-avatar" :src="txImg" alt="" />
              <div class="comment-content">
                <div class="comment-user">{{ c.user }}</div>
                <div class="comment-text">{{ c.text }}</div>
                <div class="comment-date">{{ c.date }}</div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.capital-page {
  position: relative;
  min-height: 100vh;
  background: #274769; /* 页面底色，可根据需要调整 */
  overflow: hidden;
}
.capital-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(@/assets/images/bg.jpg) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.5;
  z-index: 0;
  pointer-events: none;
}
.main-content {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 30px;
  box-sizing: border-box;
  padding: 24px 20px 0;
}
.content-left {
  flex: 2.5;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.article-card {
  width: 100%;
  height: 0;
  padding-bottom: 20%; 
  background: #f4f7fa;
  border-radius: 8px;
  box-shadow: 0 2px 8px #0001;
  margin: 8px;
  position: relative;
}
.article-header {
  display: flex;
  gap: 0;
  align-items: stretch;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.article-img-wrapper {
  width: 200px;
  height: 100%;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
.article-img-wrapper.left {
  margin-right: 0;
}
.article-img-wrapper.right {
  margin-left: 0;
}
.article-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  padding: 0 24px;
  text-align: left;
}
/* 仅双数时让内容向左靠 */
.article-header > .article-info:first-child {
  margin-right: -30px;
}
/* 让图片在右边时，内容向左靠近图片 */
.article-header .article-img-wrapper.right + .article-info {
  margin-left: -30px;
  margin-right: 0;
}
.article-img-wrapper.left .article-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px 0 0 6px;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
}
.article-img-wrapper.right .article-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 6px 6px 0;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
}
.article-info h3 {
  color: var(--main-deepblue);
  margin-bottom: 4px;
}
.article-info h3 a {
  color: var(--main-deepblue);
  text-decoration: none;
  transition: color 0.2s;
}
.article-info h3 a:hover {
  color: #315d90;
  background: none !important;
  text-decoration: none;
}
.article-desc {
  color: var(--main-blue);
  font-size: 14px;
  margin: 8px 0;
}
.article-date {
  font-size: 12px;
  color: var(--main-light);
}
.content-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.profile-card,
.notice-card,
.comments-card {
  background: #f4f7fa;
  border-radius: 8px;
  box-shadow: 0 2px 8px #0001;
  padding: 16px;
  margin-bottom: 8px;
}
.profile-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  margin: 0 auto 8px auto;
  border: 2px solid var(--main-blue);
}
.profile-name {
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 4px;
  color: var(--main-deepblue);
}
.profile-desc {
  text-align: center;
  color: var(--main-blue);
  font-size: 14px;
  margin-bottom: 8px;
}
.profile-stats {
  display: flex;
  justify-content: space-around;
  font-size: 13px;
  color: var(--main-dark);
}
.notice-title {
  font-weight: bold;
  color: var(--main-blue);
  margin-bottom: 6px;
}
.notice-content {
  font-size: 14px;
  color: var(--main-dark);
}
.comments-title {
  font-weight: bold;
  margin-bottom: 8px;
  color: var(--main-blue);
}
.comment-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 8px;
}
.comment-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.5px solid var(--main-light);
}
.comment-content {
  flex: 1;
}
.comment-user {
  font-weight: bold;
  font-size: 14px;
  color: var(--main-deepblue);
}
.comment-text {
  font-size: 13px;
  color: var(--main-blue);
}
.comment-date {
  font-size: 12px;
  color: var(--main-light);
}
</style>
