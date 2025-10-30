import { createRouter,createWebHistory } from "vue-router";
const routes=[
    {
        path:'/',
        alias:'/home',
        component:()=>import('./components/Home.vue')
    },
     {
        path:'/bid/:id',
        alias:'/bid',
        name:'bid',
        component:()=>import('./components/Bid')
    },
    // {
    //     path:'/about',
    //     alias:'/about',
    //     name:'about',
    //     component:()=>import('./components/About')
    // },
    // {
    //     path:'/blog',
    //     alias:'/blog',
    //     name:'blog',
    //     component:()=>import('./components/Blog')
    // }
]

const router=createRouter({
    history:createWebHistory(),
    routes,
})
export default router;