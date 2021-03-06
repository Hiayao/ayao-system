import api from '../../http/api'
import router from '../../router'
import {Message} from 'element-ui'
router.options.routes

export default {
    namespaced:true,   //开启命名空间：这个文件就是单独的一个vuex的模块
    state:{
        menus:[]
    },
    mutations:{
        setMenus(state,data){
            state.menus = data
        }
    },
    actions:{
        //所有的请求都卸载actions里面
        // action里面的方法可以传两个参数，第一个参数是整个store(vuex对象)，第二个参数是请求的参数
        async getMenus({commit}){
            let res = await api.getMenus()
            console.log(res);
            if(res.meta.status === 200){
                res.data.unshift({authName:'首页',path:'Home'})
                console.log(router.options.routes);
                router.options.routes.map(item => {
                    if(item.children){
                        item.children.map(item1 => {
													console.log(item1);
                            res.data.map(item2 => {
                                if(item2.path === item1.name){
                                    item2.icon = item1.meta.icon
                                }
														})
														if(item1.children){
														
															// item1.children.map
														}
                        })
                    }
                })
                //提交mutation
                commit('setMenus',res.data)
            }
        },
        // 或者
        // getMenus(){
        //     api.getMenus().then().catch()
        // }
        async login({commit},{username,password}){
            console.log(commit);
            let res = await api.login({
                username,
                password
            })
            if(res.meta.status === 200){
                //存储信息
                localStorage.setItem('token',res.data.token)
                localStorage.setItem('user',JSON.stringify(res.data))
                // 跳转路由
                router.push('/')
                // 提示用户
                Message.success('登录成功')
            }else{
                Message.error(res.meta.msg)
            }
        }
    },
}