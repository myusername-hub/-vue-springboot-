<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CapitalNav from '@/views/Capital/Capitalnav.vue'
import txImg from '@/assets/images/tx.jpg'

const userInfo = ref({
  id: 'ID10086',
  username: 'Cheems',
  email: 'cheems@example.com',
  description: '这个人很懒，什么都没有留下...',
  createTime: '2024-01-01'
})

// 头像上传相关
const fileInput = ref<HTMLInputElement | null>(null)
const avatarUrl = ref(txImg)

const handleAvatarClick = () => {
  fileInput.value?.click()
}

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      avatarUrl.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

// 保存修改
const handleSave = () => {
  alert('保存修改功能待实现')
}
</script>

<template>
  <div class="edit-page">
    <CapitalNav />
    <div class="edit-container">
      <h2 class="edit-title">编辑个人信息</h2>
      
      <div class="edit-content">
        <!-- 左侧头像 -->
        <div class="avatar-section">
          <div class="avatar-wrapper" @click="handleAvatarClick">
            <img :src="avatarUrl" alt="avatar" class="avatar">
            <div class="avatar-mask">
              <span>点击更换头像</span>
            </div>
          </div>
          <input 
            ref="fileInput"
            type="file"
            accept="image/*"
            style="display: none"
            @change="handleFileChange"
          >
        </div>

        <!-- 右侧信息 -->
        <div class="info-section">
          <div class="info-item">
            <label>ID</label>
            <span>{{ userInfo.id }}</span>
          </div>
          
          <div class="info-item">
            <label>用户名</label>
            <input v-model="userInfo.username" type="text">
          </div>
          
          <div class="info-item">
            <label>邮箱</label>
            <input v-model="userInfo.email" type="email">
          </div>
          
          <div class="info-item">
            <label>个人简介</label>
            <textarea v-model="userInfo.description" rows="3"></textarea>
          </div>
          
          <div class="info-item">
            <label>注册时间</label>
            <span>{{ userInfo.createTime }}</span>
          </div>
          
          <button class="save-btn" @click="handleSave">保存修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.edit-page {
  min-height: 100vh;
  background: var(--main-bg);
}

.edit-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.edit-title {
  color: var(--main-deepblue);
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 600;
}

.edit-content {
  display: flex;
  gap: 40px;
}

.avatar-section {
  flex: 0 0 200px;
}

.avatar-wrapper {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s;
}

.avatar-wrapper:hover .avatar-mask {
  opacity: 1;
}

.info-section {
  flex: 1;
}

.info-item {
  margin-bottom: 20px;
}

.info-item label {
  display: block;
  margin-bottom: 8px;
  color: var(--main-dark);
  font-weight: 500;
}

.info-item input,
.info-item textarea {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.info-item textarea {
  resize: vertical;
  min-height: 80px;
}

.info-item span {
  color: #666;
  font-size: 14px;
}

.save-btn {
  width: 100%;
  height: 40px;
  background: var(--main-blue);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

.save-btn:hover {
  background: var(--main-deepblue);
}
</style>
