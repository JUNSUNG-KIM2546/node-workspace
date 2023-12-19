import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import MemberList from '../views/MemberList.vue'
import MemberAdd from '../views/MemberAdd.vue'
import MemberEdit from '../views/MemberEdit.vue'

import HelloWorld from '../components/HelloWorld.vue'
import WelcomeItem from '../components/WelcomeItem.vue'
import TheWelcome from '../components/TheWelcome.vue'
import LifeCycle from '../components/LifeCycle.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { // '/' 경로로 접속하면 HomeView 컴포넌트를 출력
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    //{ path: '/member/list', component: MemberList },
    //{ path: '/member/add', component: MemberAdd },
    //{ path: '/member/edit', component: MemberEdit },
    { path: '/member/list', component: MemberList },
    { path: '/member/new', component: MemberAdd },
    { path: '/member/edit/:id', component: MemberEdit },
    { path: '/hello', component: HelloWorld },
    {  path: '/life', component: LifeCycle },
    { path: '/wel', component: TheWelcome },
    { path: '/item', component: WelcomeItem },
  ]
})

export default router
