import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout/Layout.vue'


Vue.use(VueRouter)

  const routes = [
  
  {
    path:'',
    component: Layout,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          icon:'el-icon-s-home'
        }
      },
    ]
  },
  {
    path:'/login',
    name:'Login',
    component:() => import('../views/Login.vue')
  },
  {
    path: '*',
    name: 'Err',
    component: () => import('../views/Err')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
