
import VueRouter from 'vue-router'
/* import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) */

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    }
  ]
})
