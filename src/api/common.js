import API from './config'

export default class Common{
    static uploadImage(url, params){
        return API.post(url,params)
            .then(res => res)
            .catch(e => e)
    }
    static login(data){
        return API.post('/api/users/checkUser',data)
            .then(res => res)
            .catch(e => e)
    }
}
