import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Articles from '@/blocks/Articles'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/create',
      name: 'Articles',
      component: Articles
    }
  ]
})
