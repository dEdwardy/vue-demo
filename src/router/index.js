import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'home',
            component: () => import('../views/Home')
        },
        {
            path:'/file',
            name:'file',
            component: () => import('../components/FileUpload')
        },
        {
            path:'/surprise',
            name:'surprise',
            component: () => import('../views/Surprise')
        }
    ]
})

export default router;