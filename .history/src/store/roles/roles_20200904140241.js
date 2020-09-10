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
                res.data.map((item, index) => {
                    item.num = index + 1
                })
                //提交mutation
                commit('setRoles', res.data)
            }
        },

        async Addroles({ commit }, { roleName, roleDesc }) { //添加角色
            let res = await api.Addroles({ roleName, roleDesc })
            console.log(res);
            console.log(commit);
            if (res.meta.status === 201) {
                Message.success(res.meta.msg)
            }
            else {
                Message.error(res.meta.msg)
            }
        },

        async deleteroles({ dispatch }, id) { //删除角色
            try {
                let res = await api.deleteroles(id)
                console.log(res);
                if (res.meta.status === 200) {
                    Message.success(res.meta.msg)
                    dispatch('getRoles')
                } else {
                    Message.error(res.meta.msg)
                }
            } catch (err) {
                console.log(err);
            }
        },
    }

}