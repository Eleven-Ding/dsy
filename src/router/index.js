import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
  {//配置映射关系
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('views/home/Home')
  },
  {
    path: '/view',
    component: () => import('views/view/View')
  },
  {
    path: '/cart',
    component: () => import('views/about/Cart')
  },
  {
    path: '/profile',
    component: () => import('views/profile/Profile')
  },
  {
    path: '/detail/:id',
    component: () => import('views/detail/Detail')
  }
]
const router = new Router({
  routes,
  mode: 'history'
})

export default router
