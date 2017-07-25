import Vue from 'vue'
import Router from 'vue-router'

// 懒加载,需要的时候才加载
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const about = r => require.ensure([], () => r(require('../page/about/about')), 'about')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const user = r => require.ensure([], () => r(require('../page/user/user')), 'user')

// test
const test = r => require.ensure([], () => r(require('../page/test/test')), 'test')
const vuexTest = r => require.ensure([], () => r(require('../page/test/children/vuex')), 'vuex')
const directiveTest = r => require.ensure([], () => r(require('../page/test/children/directive')), 'directive')
const componentTest = r => require.ensure([], () => r(require('../page/test/children/component')), 'component')
const elementUITest = r => require.ensure([], () => r(require('../page/test/children/element')), 'elementUI')

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
                path: 'directiveTest',
                name: 'directiveTest',
                component: directiveTest
            }, {
                path: 'componentTest',
                name: 'componentTest',
                component: componentTest
            }, {
                path: 'elementUITest',
                name: 'elementUITest',
                component: elementUITest
            }]
        }
    ]
})
