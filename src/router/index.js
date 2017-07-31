import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store'
import storage from '../config/storageHelp'

// 懒加载,需要的时候才加载
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const about = r => require.ensure([], () => r(require('../page/about/about')), 'about')
const login = r => require.ensure([], () => r(require('../page/auth/login')), 'login')
const user = r => require.ensure([], () => r(require('../page/user/user')), 'user')

// test
const test = r => require.ensure([], () => r(require('../page/test/test')), 'test')
const vuexTest = r => require.ensure([], () => r(require('../page/test/children/vuex')), 'vuex')
const directiveTest = r => require.ensure([], () => r(require('../page/test/children/directive')), 'directive')
const componentTest = r => require.ensure([], () => r(require('../page/test/children/component')), 'component')
const elementUITest = r => require.ensure([], () => r(require('../page/test/children/element')), 'elementUI')

Vue.use(Router)

// 路由匹配
const routes = [{
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
        meta: {
            // 需要授权,只有登录之后才能访问这个页面
            requireAuth: true
        },
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

const router = new Router({
    routes
})

const checkAuth = () => {
    console.log('checkAuth', storage)
    if (storage.accessToken) {
        // console.log('storage.accessToken', storage.accessToken)
        return true
    } else {
        return false
    }
}

// 权限校验
router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (checkAuth()) {
            next()
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next()
    }
})

export default router
