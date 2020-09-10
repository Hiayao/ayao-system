import api from '../../http/api'
import { Message } from 'element-ui'

export default {
    namespaced: true,   //开启命名空间：这个文件就是单独的一个vuex的模块

    state: {
        sortList: [],  //商品列表
        total: 0,
        arr: []
    },
    mutations: {
        setSort(state, data) {
            state.sortList = data
        },
        setTotal(state, data) {
            state.total = data
        },
        setArr(state, data) {
            state.arr = data
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
                        // item.label = item.cat_name
                        // item.value = item.cat_id
                        // if (item.children) {
                        //     item.children.map(item1 => {
                        //         item1.label = item1.cat_name
                        //         item1.value = item1.cat_id
                        //         if (item1.children) {
                        //             item1.children.map(item2 => {
                        //                 item2.label = item2.cat_name
                        //                 item2.value = item2.cat_id
                        //             })
                        //         }
                        //     })
                        // }
                    })
                    let arr = res.data.result
                    arr.map((item, index) => {
                        item.num = index + 1
                        item.label = item.cat_name
                        item.value = item.cat_id
                        if (item.children) {
                            item.children.map(item1 => {
                                item1.label = item1.cat_name
                                item1.value = item1.cat_id
                                item1.children = item1.xxx
                                if (item1.children) {
                                    item1.children.map(item2 => {
                                        item2.label = item2.cat_name
                                        item2.value = item2.cat_id
                                    })
                                }
                            })
                        }
                    })
                    console.log(arr);
                    console.log(res.data.result);
                    //提交mutation
                    commit('setSort', res.data.result)
                    commit('setTotal', res.data.total)
                    commit('setArr', arr)
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