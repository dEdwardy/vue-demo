import axios from 'axios';
import Vue from 'vue';
import router from '../router';
const vm = new Vue();
const Axios = axios.create({
    baseURL: '',
    timeout: 1000,
    withCredentials: false, // 是否允许带cookie等
    headers:{
        'Content-Type': 'application/json',
    }

});
//拦截request
Axios.interceptors.request.use(config => {
    console.log('拦截req')
    // console.log(config)
    // console.log(config.url.indexOf('checkUser')==-1)
    // if(config.url.indexOf('checkUser')>=-1){
    //     //将凭证添加到req headers中
    //     //config.header[***] = ***;
    //     config.headers[Token] = localStorage.getItem('Token') ||''
    // }
    if(localStorage.getItem('Token'))
    config.headers['Token'] = localStorage.getItem('Token')
    return config
},err => {
    console.log('req error')
    throw(err)
})
//拦截response
Axios.interceptors.response.use(res => {
    /*****
     * sth    eg:http 401，500 的处理
     */
    
    console.log('拦截res')
    return res
},err => {
    console.log(err.response.status);
    // console.log(err.response);
    // if(err.response.status===401){
    //     vm.$Message.warning(err.response.data)
    // }
    // setTimeout(() => {
    //     router.push('/login')
    // },2000)
})

export default Axios;