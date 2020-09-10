import api from '../../http/api'
// import { Message } from 'element-ui'

export default {
    namespaced: true,   //开启命名空间：这个文件就是单独的一个vuex的模块

    state: {
        attributes:[]
    },
    mutations: {
        setAttributes(state, data) {
            state.attributes = data
        },
    },
    actions: {
        async getAttributes({ commit }, { id, sel }) { // 编辑提交角色
            try {
                let res = await api.getAttributes({ id, sel })
                console.log(res);
                if (res.meta.status === 200) {
                    res.data.map((item, index) => {
                        item.num = index + 1
                    })
                    //提交mutation
                    commit('setAttributes', res.data)
                }
            } catch (err) {
                console.log(err);
            }
        },
    }

}