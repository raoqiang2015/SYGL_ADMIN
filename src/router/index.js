import Vue from 'vue';
import VueRouter from 'vue-router';
import { loginRouter,routers } from './router';

Vue.use(VueRouter);

//路由默认配置
const RouterConfig = {
    routes: routers
};

export const router = new VueRouter(RouterConfig);
