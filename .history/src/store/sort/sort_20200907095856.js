import api from '../../http/api'
// import { Message } from 'element-ui'

export default {
    namespaced: true,   //开启命名空间：这个文件就是单独的一个vuex的模块

    state: {
        sortList: [],  //商品列表
        total: 0
    },
    mutations: {
        setSort(state, data) {
            state.sortList = data
        },
        setTotal(state, data) {
            state.total = data
        },
    },
    actions: {
        async getCategories({ commit }, { type, pagenum, pagesize }) { // 编辑提交角色
            try {
                let res = await api.getCategories({ type, pagenum, pagesize })
                console.log(res);
                if (res.meta.status === 200) {
                    res.data.result.map((item, index) => {
                        item.num = index + 1
                        if(item.children){
                            item.hasChildren = true
                        }
                    })
                    //提交mutation
                    commit('setSort', res.data.result)
                    commit('setTotal', res.data.total)
                }
            } catch (err) {
                console.log(err);
            }
        },
    }

}