<script lang="ts">
export default {
  name: 'CapitalIndex',
}
</script>
<script setup lang="ts">
import CapitalNav from './Capitalnav.vue'
</script>
<template>
  <div class="capital-page">
    <CapitalNav />
    <div class="main-content">
      <div class="content-left">
        <!-- 文章列表示例 -->
        <div class="article-card" v-for="i in 3" :key="i">
          <div class="article-header">
            <img class="article-img" src="https://via.placeholder.com/120x80" alt="文章图片" />
            <div class="article-info">
              <h3>文章标题示例 {{ i }}</h3>
              <p class="article-desc">这里是文章简介内容，支持Markdown语法。</p>
              <button class="more-btn">more...</button>
            </div>
          </div>
        </div>
      </div>
      <div class="content-right">
        <!-- 个人信息卡片 -->
        <div class="profile-card">
          <img class="profile-avatar" src="https://via.placeholder.com/100" alt="头像" />
          <div class="profile-name">Cheems</div>
          <div class="profile-desc">网站介绍</div>
          <div class="profile-stats">
            <span>26 文章</span>
            <span>9 分类</span>
            <span>22 标签</span>
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
          <div class="comment-item" v-for="i in 3" :key="i">
            <img class="comment-avatar" src="https://via.placeholder.com/32" alt="头像" />
            <div class="comment-content">
              <div class="comment-user">Cheems</div>
              <div class="comment-text">评论内容示例 {{ i }}</div>
              <div class="comment-date">2023-05-12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.capital-page {
  background: #f7f7fa;
  min-height: 100vh;
}
.main-content {
  display: flex;
  width: 100vw;
  /* 移除max-width和margin */
  gap: 24px;
  box-sizing: border-box;
  padding: 24px 24px 0 24px;
}
.content-left {
  flex: 2.5;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.article-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px #0001;
  padding: 16px;
  display: flex;
  flex-direction: column;
}
.article-header {
  display: flex;
  gap: 16px;
}
.article-img {
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
}
.article-info {
  flex: 1;
}
.article-desc {
  color: #888;
  font-size: 14px;
  margin: 8px 0;
}
.more-btn {
  background: #ff6f91;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 12px;
  cursor: pointer;
  font-size: 13px;
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
  background: #fff;
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
}
.profile-name {
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 4px;
}
.profile-desc {
  text-align: center;
  color: #888;
  font-size: 14px;
  margin-bottom: 8px;
}
.profile-stats {
  display: flex;
  justify-content: space-around;
  font-size: 13px;
  color: #555;
}
.notice-title {
  font-weight: bold;
  color: #ff6f91;
  margin-bottom: 6px;
}
.notice-content {
  font-size: 14px;
  color: #333;
}
.comments-title {
  font-weight: bold;
  margin-bottom: 8px;
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
}
.comment-content {
  flex: 1;
}
.comment-user {
  font-weight: bold;
  font-size: 14px;
}
.comment-text {
  font-size: 13px;
  color: #444;
}
.comment-date {
  font-size: 12px;
  color: #aaa;
}
</style>
 1;
}
.comment-user {
  font-weight: bold;
  font-size: 14px;
}
.comment-text {
  font-size: 13px;
  color: #444;
}
.comment-date {
  font-size: 12px;
  color: #aaa;
}
</style>
 1;
}
.comment-user {
  font-weight: bold;
  font-size: 14px;
}
.comment-text {
  font-size: 13px;
  color: #444;
}
.comment-date {
  font-size: 12px;
  color: #aaa;
}
</style>
 12px;
  color: var(--main-blue);
=======
}
.comment-content {
  flex: 1;
}
.comment-user {
  font-weight: bold;
  font-size: 14px;
}
.comment-text {
  font-size: 13px;
  color: #444;
}
.comment-date {
  font-size: 12px;
  color: #aaa;
>>>>>>> lxy

  color: var(--main-deepblue);
}

.comment-text {
  font-size: 13px;
  color: var(--main-dark);
}

.comment-date {
  font-size: 12px;
  color: var(--main-blue);
 {
  flex: 1;
}
.comment-user {
  font-weight: bold;
  font-size: 14px;
}
.comment-text {
  font-size: 13px;
  color: #444;
}
.comment-date {
  font-size: 12px;
  color: #aaa;
}
</style>
