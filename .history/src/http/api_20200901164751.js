import service from './index'

export default {
    // 登录
    login({ username, password }) {
        return service.post('/login', {
            username: username,
            password: password
        })
    },
    // 获取左侧导航
    getMenus() {
        return service.get('/menus')
    },
    // 获取用户列表
    getUsersList({ pagenum, pagesize, query }) {
        return service.get(`/users?pagenum=${pagenum}&pagesize=${pagesize}&query=${query}`)
    },
    // 修改用户信息
    getUsersEdit({ id, email, mobile }) {
        return service.put(`users/${id}`, {
            email,
            mobile
        })
    },
    // 删除单个用户
    getUsersDelete(id) {
        return service.delete(`users/${id}`)
    },
    //添加用户
    addUser({username,password,email,mobile}){
        return service.post(`/users`,{
            username,
            password,
            email,
            mobile                     
        })
    }
}