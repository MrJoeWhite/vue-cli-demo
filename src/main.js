// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'babel-polyfill'
import axios from 'axios'
import store from './store'
import ELEMENT from 'element-ui'

Vue.config.productionTip = false
Vue.use(ELEMENT)
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
