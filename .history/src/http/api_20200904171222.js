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
    addUser({ username, password, email, mobile }) {
        return service.post(`/users`, {
            username,
            password,
            email,
            mobile
        })
    },
    //  修改用户状态
    state({ uId, type }) {
        return service.put(`users/${uId}/state/${type}`)
    },
    //  角色列表
    getRoles() {
        return service.get('/roles')
    },
    //  分配用户角色
    usersRoles({ id, rid }) {
        return service.put(`users/${id}/role`, { rid })
    },
    //  添加角色
    Addroles({ roleName, roleDesc }) {
        return service.post(`roles`, { roleName, roleDesc })
    },
    //   删除角色
    deleteroles(id) {
        return service.delete(`roles/${id}`)
    },
    //   根据 ID 查询角色
    getRolesOne(id) {
        return service.get(`roles/${id}`)
    },
    //    所有权限列表
    getRights(type) {
        return service.get(`rights/${type}`)
    },
    //    编辑提交角色
    putRoles({ id, roleName, roleDesc }) {
        return service.put(`roles/${id}`, {
            roleName, roleDesc
        })
    },
    //    订单数据列表
    getOrders({ query, pagenum, pagesize, user_id,
        pay_status, is_send, order_fapiao_title,
        order_fapiao_company, order_fapiao_content, consignee_addr }) {
        return service.get(`/orders?query=${query}&pagenum=${pagenum}&pagesize=${pagesize}&user_id=${user_id}&pay_status=${pay_status}&is_send=${is_send}&order_fapiao_title=${order_fapiao_title}&order_fapiao_company=${order_fapiao_company}&order_fapiao_content=${order_fapiao_content}&consignee_addr=${consignee_addr}`)
    },
}