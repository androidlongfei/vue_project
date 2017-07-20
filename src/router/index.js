import Vue from 'vue'
import Router from 'vue-router'

// 懒加载,需要的时候才加载
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const about = r => require.ensure([], () => r(require('../page/about/about')), 'about')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const user = r => require.ensure([], () => r(require('../page/user/user')), 'user')

// test
const test = r => require.ensure([], () => r(require('../page/test/test')), 'test')
const vuexTest = r => require.ensure([], () => r(require('../page/test/children/vuexTest')), 'vuexTest')
const vBindTest = r => require.ensure([], () => r(require('../page/test/children/vBindTest')), 'vBindTest')

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
        },
        {
            path: '/user',
            name: 'user',
            component: user
        },
        // 测试
        {
            path: '/test',
            name: 'test',
            component: test,
            children: [{
                path: 'vuexTest',
                name: 'vuexTest',
                component: vuexTest
            }, {
                path: 'vBindTest',
                name: 'vBindTest',
                component: vBindTest
            }]
        }
    ]
})
