import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
