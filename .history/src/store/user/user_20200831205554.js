import api from '../../http/api'
import router from '../../router'
import { Message } from 'element-ui'
router.options.routes

export default {
    namespaced: true,   //开启命名空间：这个文件就是单独的一个vuex的模块
    state: {
        menus: []
    },
    mutations: {
        setMenus(state, data) {
            state.menus = data
        }
    },
    actions: {
        //所有的请求都卸载actions里面
        // action里面的方法可以传两个参数，第一个参数是整个store(vuex对象)，第二个参数是请求的参数
        async getMenus({ commit }) {
            let res = await api.getMenus()
            console.log(res);
            if (res.meta.status === 200) {
                res.data.unshift({ authName: '首页', path: 'Home' })
                console.log(router.options.routes);
                router.options.routes.map(routes => {
                    if (routes.children) {
                        // routes.children.map(children => {
                        //     res.data.map(data => {
                        //         if (data.path === children.name) {
                        //             data.icon = children.meta.icon
                        //         }
                        //         if (children.meta.children) {
                        //             children.meta.children.map(item => {
                        //                 if (data.children) {
                        //                     data.children.map(item1 => {
                        //                         if (item.name === item1.path) {
                        //                             item1.icon = item.meta.icon
                        //                         }
                        //                     })
                        //                 }
                        //             })
                        //         }
                        //     })
                        // })
                        res.data.map(data => {
                            if(data.path === routes.meta.name){
                                data.icon = routes.meta.icon
                            }
                        })
                    }
                })
                //提交mutation
                commit('setMenus', res.data)
            }
        },
        // 或者
        // getMenus(){
        //     api.getMenus().then().catch()
        // }
        async login({ commit }, { username, password }) {
            console.log(commit);
            let res = await api.login({
                username,
                password
            })
            if (res.meta.status === 200) {
                //存储信息
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', JSON.stringify(res.data))
                // 跳转路由
                router.push('/')
                // 提示用户
                Message.success('登录成功')
            } else {
                Message.error(res.meta.msg)
            }
        }
    },
}