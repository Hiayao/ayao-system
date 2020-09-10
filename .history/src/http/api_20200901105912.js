import service from './index'

export default{
    login({username,password}){
        return service.post('/login',{
            username:username,
            password:password
        })
    },
    getMenus(){
        return service.get('/menus')
    },
    getUsersList(){
        return service.get('/users')
    }
}