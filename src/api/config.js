import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:8088',
    timeout: 1000,
    withCredentials: false, // 是否允许带cookie等
    headers:{
        'Content-Type': 'application/json',
    }

});
//拦截request
Axios.interceptors.request.use(config => {
    console.log(config)
    console.log(config.url.indexOf('checkUser')>=-1)
    if(config.url.indexOf('checkUser')>=-1){
        //将凭证添加到req headers中
        //config.header[***] = ***;
    }
    console.log('拦截request 嘻嘻')
    return config
},err => {

})
//拦截response
Axios.interceptors.response.use(res => {
    /*****
     * sth    eg:http 401，500 的处理
     */
    console.log('拦截res')
    return res;
},err => {

})

export default Axios;