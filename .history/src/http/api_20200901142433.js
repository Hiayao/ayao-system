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
    getUsersList({pagenum,pagesize,query}){
        return service.get(`/users?pagenum=${pagenum}&pagesize=${pagesize}&query=${query}`)
    },
    getUsersEdit({id,email,mobile}){
        return service.put(`users/${id}?email=${email}&mobile=${mobile}`)
    }
}