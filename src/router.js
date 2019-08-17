import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Coba from './views/Coba.vue'
import Admin from './components/Admin.vue'
import Order from './components/Order.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'home',component: Home}
    ,{path: '/coba', name: 'coba',component: Coba}
    ,{path: '/admin', name: 'admin',component: Admin}
    ,{path: '/gooutya', name: 'logout',component: Admin}
    ,{path: '/order', name: 'order',component: Order}
  ]
})
