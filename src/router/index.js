import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Layout = () => import('@/views/Layout/index.vue')
const Home = () => import('@/views/Home/Home.vue')
const Search = () => import('@/views/Search')

const routes = [
  { path: '/', redirect: '/layout' },
  {
    path: '/layout',
    component: Layout,
    redirect: '/layout/home',
    children: [
      { path: 'home', component: Home },
      { path: 'search', component: Search }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
