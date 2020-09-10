import api from '../../http/api'
// import { Message } from 'element-ui'

export default {
    namespaced: true,   //开启命名空间：这个文件就是单独的一个vuex的模块

    state: {
        goodsList: [],  //商品列表
        total:0
    },
    mutations: {
        setGoods(state, data) {
            state.goodsList = data
        },
        setTotal(state, data) {
            state.total = data
        },
    },
    actions: {
        async getGoods({ commit }, { query, pagenum, pagesize }) { // 编辑提交角色
            try {
                let res = await api.getGoods({ query, pagenum, pagesize })
                console.log(res);
                if (res.meta.status === 200) {
                    res.data.goods.map((item, index) => {
                        item.num = index + 1
                    })
                    //提交mutation
                    commit('setGoods', res.data.goods)
                    commit('setTotal', res.data.total)
                }
            } catch (err) {
                console.log(err);
            }
        },
    }

}