// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'babel-polyfill'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
 // import '@/assets/less/reset.less'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(ElementUI)


setTimeout(() => {
  let dom = new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
  })
})
