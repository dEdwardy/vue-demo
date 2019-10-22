import axios from 'axios';

const Axios = axios.create({
    baseURL: '',
    timeout: 1000,
    withCredentials: true, // 是否允许带cookie等
    headers:{
        'Content-Type': 'application/json',
    }

});
//拦截request
Axios.interceptors.request.use(config => {

},err => {

})
//拦截response
Axios.interceptors.response.use(res => {

},err => {

})

export default Axios;