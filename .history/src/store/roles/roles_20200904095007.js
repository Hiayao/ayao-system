import api from '../../http/api'
import { Message } from 'element-ui'

export default {
    namespaced: true,   //开启命名空间：这个文件就是单独的一个vuex的模块

    state: {
        rolesList: [],  //角色列表
    },
    mutations: {
        setRoles(state, data) {
            state.rolesList = data
        },
    },
    actions: {
        async getRoles({ commit }) { //角色列表
            let res = await api.getRoles()
            console.log(res);
            if (res.meta.status === 200) {
                //提交mutation
                commit('setRoles', res.data)
            }
        },

        async Addroles({ commit },{ roleName, roleDesc}) { //角色列表
            let res = await api.Addroles({roleName, roleDesc})
            console.log(res);
            console.log(commit);
            if (res.meta.status === 201) {
                Message.success(res.meta.msg)
            }
            else{
                Message.error(res.meta.msg)
            }
        }
    },

}