
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '*',
      name: 'error',
      component: () => import('@/pages/error/Error')
    },
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/pages/index/Index')
    }
  ]
})
