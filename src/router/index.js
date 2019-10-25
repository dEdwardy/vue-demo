import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const router = new Router({
    mode:'history',
    routes:[{
            path:'/',
            name:'login',
            component: () => import('../views/Login')
        },
        {
            path:'/home',
            name:'home',
            component: () => import('../views/Home')
        },
        {
            path:'/surprise',
            name:'surprise',
            component: () => import('../views/Surprise')
        },{
            path:'/echarts',
            name:'echarts',
            component: () => import('@/views/Echarts/index.vue')
        },{
            path:'*',
            component: () => import('../views/Login')
        }
    ]
})
router.beforeEach((to,from,next) =>{
    next()
})

export default router;