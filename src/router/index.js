
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/* import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) */

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
