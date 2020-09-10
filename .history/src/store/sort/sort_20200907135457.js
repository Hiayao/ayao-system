import api from '../../http/api'
import { Message } from 'element-ui'

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
        async getCategories({ commit }, { type, pagenum, pagesize }) { //  商品分类数据列表
            try {
                let res = await api.getCategories({ type, pagenum, pagesize })
                console.log(res);
                if (res.meta.status === 200) {
                    res.data.result.map((item, index) => {
                        item.num = index + 1
                        item.label = item.cat_name
                        if(item.children){
                            item.children.map(item1 => {
                                item1.label = item1.cat_name
                            })
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
        async Addcategories({ dispatch }, { cat_pid, cat_name, cat_level, type, pagenum, pagesize }) {
            //添加分类
            try {
                let res = await api.Addcategories({ cat_pid, cat_name, cat_level })
                // console.log(res);
                if (res.meta.status === 201) {
                    Message.success(res.meta.msg)
                    //调用获取 商品分类数据列表
                    dispatch('getCategories', {
                        type, pagenum, pagesize
                    })
                } else {
                    Message.error(res.meta.msg)
                }
            } catch (err) {
                console.log(err);
            }
        },
    }

}