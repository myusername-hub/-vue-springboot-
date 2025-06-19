import Img1 from '@/assets/images/img1.jpg'
import Img2 from '@/assets/images/img2.jpg'
import Img3 from '@/assets/images/img3.jpg'

// 用户信息
export const userInfo = {
  name: 'Cheems',
  description: '这个人很懒，什么都没有留下...',
  articleCount: 3,
  followCount: 0,
  fansCount: 0
}

// 文章数据
export const articles = [
  {
    id: 1,
    title: 'Vue3 + TS 实战入门',
    desc: '带你快速上手Vue3和TypeScript开发，适合初学者。',
    img: Img1,
    date: '2024-06-01',
    views: 128,
    likes: 32
  },
  {
    id: 2,
    title: 'SpringBoot RESTful API设计',
    desc: '如何用SpringBoot优雅地设计RESTful接口。',
    img: Img2,
    date: '2024-06-02',
    views: 99,
    likes: 21
  },
  {
    id: 3,
    title: '前端性能优化技巧',
    desc: '常见的前端性能优化方法与实践。',
    img: Img3,
    date: '2024-06-03',
    views: 77,
    likes: 15
  }
]

// 分类和标签数量
export const categoryCount = 0
export const tagCount = 0 