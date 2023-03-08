import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        component: () => import('@/views/index/Index'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home/Home')
            },
            {
                path: '/category',
                name: 'category',
                component: () => import('@/views/category/Category')
            },
            {
                path: '/archives',
                name: 'archives',
                component: () => import('@/views/archives/Archives')
            },
            {
                path: '/moments',
                name: 'moments',
                component: () => import('@/views/moments/Moments')
            },
            {
                path: '/friends',
                name: 'friends',
                component: () => import('@/views/friends/Friends')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/about/About')
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})



export default router