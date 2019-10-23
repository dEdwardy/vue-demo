import API from './config'

export default class Common{
    static uploadImage(url, params){
        return API.post(url,params);
    }
}
