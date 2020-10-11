import Vue from 'vue'
import VueRouter from 'vue-router'

import Discovery from '@/views/Discovery'
import Recommend from '@/views/Recommend'
import Song from '@/views/Song'
import Mv from '@/views/Mv'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/discovery'
  },
  {
    name: 'discovery',
    path: '/discovery',
    component: Discovery,
    meta: { title: '发现音乐' }
  },
  {
    name: 'recommend',
    path: '/recommend',
    component: Recommend,
    meta: { title: '推荐歌单' }
  },
  {
    name: 'song',
    path: '/song',
    component: Song,
    meta: { title: '最新音乐' }
  },
  {
    name: 'mv',
    path: '/mv',
    component: Mv,
    meta: { title: '最新MV' }
  }
]

const router = new VueRouter({
  routes
})

/** 全局路由后置钩子：切换路由后将窗口标题对应为路由元信息中的标题 */
router.afterEach(to => {
  const { meta } = to
  
  document.title = meta.title
})

export default router
