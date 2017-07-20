import Vue from 'vue'
import Router from 'vue-router'

// 懒加载,需要的时候才加载
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const about = r => require.ensure([], () => r(require('../page/about/about')), 'about')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: home
        },
        // 首页
        {
            path: '/home',
            name: 'home',
            component: home
        },
        // 关于页
        {
            path: '/about',
            name: 'about',
            component: about
        },
        // 登录页
        {
            path: '/login',
            name: 'login',
            component: login
        }
    ]
})
