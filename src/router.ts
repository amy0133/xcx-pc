import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '主页',
      redirect: '/home'
    }, {
      path: '/home',
      name: '主页',
      component: Home
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/category',
      name: '产品类型',
      component: () => import(/* webpackChunkName: "category" */ './views/Category.vue')
    }
  ]
})
