import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/user'
import router from '../router';
router.options.routes
Vue.use(Vuex)

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    //存储共享的数据
  },
  mutations: {
    // 同步修改state的值
  },
  actions: {
    // 异步提交mutation
  },
  modules: {
    //模块
    user
  }
})
