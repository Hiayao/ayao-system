import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout/Layout.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: Layout,
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: Home,
        meta: {
          icon: 'el-icon-s-home'
        }
      },
    ]
  },
  {
    path: '/Home',
    component: Layout,
    children: [
      {
        path: '/users',
        name: 'users',
        component: () => import('../views/users.vue'),
        meta: {
          icon: 'el-icon-user'
        },
        children: [
          {
            path: '/users',
            name: 'users',
            component: () => import('../views/users.vue'),
            meta: {
              icon: 'el-icon-user-solid'
            },
          }
        ]
      },
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/rights',
        name: 'rights',
        component: () => import('../views/rights.vue'),
        meta: {
          icon: 'el-icon-folder'
        }
      },
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/goods',
        name: 'goods',
        component: () => import('../views/goods.vue'),
        meta: {
          icon: 'el-icon-goods'
        }
      },
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/orders',
        name: 'orders',
        component: () => import('../views/orders.vue'),
        meta: {
          icon: 'el-icon-s-order'
        }
      },
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/reports',
        name: 'reports',
        component: () => import('../views/reports.vue'),
        meta: {
          icon: 'el-icon-tickets'
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
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
