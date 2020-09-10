import api from '../../http/api'
// import { Message } from 'element-ui'

export default {
    namespaced: true,   //开启命名空间：这个文件就是单独的一个vuex的模块

    state: {
        rolesList:[],  //角色列表
    },
    mutations: {
        setRoles(state, data) {
			state.rolesList = data
		},
    },
    actions: {
        async getRoles({commit}){ //角色列表
        let res = await api.getRoles()
        console.log(res);
        if(res.meta.status === 200){
            //提交mutation
				commit('setRoles', res.data)
        }
        }
    },

}