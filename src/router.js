import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Coba from './views/Coba.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'home',component: Home}
    ,{path: '/coba', name: 'coba',component: Coba}
  ]
})
