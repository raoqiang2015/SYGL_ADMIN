import Main from '@/views/main.vue';

//不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登陆'
    },
    component: resolve => { require(['@/views/login.vue'], resolve); }
}

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里面
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: { i18n: 'home' }, name: 'home_index', component: resolve => { require(['@/views/home/home.vue'], resolve); } }
    ]
}


// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter
];