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
        name: 'Home',
        component: Layout,
        meta: {
            icon: 'el-icon-s-home'
        }
    },

    {
        path: '/users',
        name: 'users',
        component: Layout,
        meta: {
            icon: 'el-icon-s-home'
        },
        children: [
            {
                path: '/users/users',
                name: 'users',
                component: () => import('../views/users.vue'),
                meta: {
                    icon: 'el-icon-user-solid'
                }
            }
        ]
		},
		
		{
			path: '/rights',
			name: 'rights',
			component: Layout,
			meta: {
					icon: 'el-icon-folder'
			},
			children: [
					{
							path: '/rights/roles',
							name: 'roles',
							component: () => import('../views/rights/roles.vue'),
							meta: {
									icon: 'el-icon-s-custom'
							}
					},
					{
						path: '/rights/rights',
						name: 'rights',
						component: () => import('../views/rights/rights.vue'),
						meta: {
								icon: 'el-icon-s-tools'
						}
					}
			]
		},

		{
			path: '/goods',
			name: 'goods',
			component: Layout,
			meta: {
					icon: 'el-icon-goods'
			},
			children: [
					{
							path: '/goods/goods',
							name: 'goods',
							component: () => import('../views/goods/goods.vue'),
							meta: {
									icon: 'el-icon-s-goods'
							}
					},
					{
						path: '/goods/params',
						name: 'params',
						component: () => import('../views/goods/params.vue'),
						meta: {
								icon: 'el-icon-c-scale-to-original'
						}
					},
					{
						path: '/goods/categories',
						name: 'categories',
						component: () => import('../views/goods/categories.vue'),
						meta: {
								icon: 'el-icon-date'
						}
					},
			]
		},

		{
			path: '/orders',
			name: 'orders',
			component: Layout,
			meta: {
					icon: 'el-icon-s-order'
			},
			children: [
					{
							path: '/orders/orders',
							name: 'orders',
							component: () => import('../views/orders.vue'),
							meta: {
									icon: 'el-icon-folder-add'
							}
					}
			]
		},

		{
			path: '/reports',
			name: 'reports',
			component: Layout,
			meta: {
					icon: 'el-icon-tickets'
			},
			children: [
					{
							path: '/reports/reports',
							name: 'reports',
							component: () => import('../views/reports.vue'),
							meta: {
									icon: 'el-icon-edit-outline'
							}
					}
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