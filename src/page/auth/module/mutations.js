// 处理同步逻辑

import * as type from './mutations_types'
import storageHelp from '../../../config/storageHelp'
import router from '../../../router'

export default {
    // 登录成功
    [type.LOGIN_SUCCESS](state, data) {
        let payload = data.payload
        console.log(`${type.LOGIN_SUCCESS}-payload`, payload)
        // state
        state.token = payload.result.token
        state.loginLoading = payload.loginLoading
        state.currentUser = payload.result.user
        state.username = payload.result.user.username
        // storage
        storageHelp.rememberMe = payload.rememberMe
        storageHelp.currentUsername = payload.result.user.username
        storageHelp.setRemeberUsername(payload.result.user.username)
        storageHelp.token = payload.result.token
        storageHelp.tokenExpirationAt = payload.result.tokenExpirationAt
        storageHelp.save()
        // router
        router.push({
            path: 'home'
        })
    },

    // 登录失败
    [type.LOGIN_FAILED](state, data) {
        console.log(`${type.LOGIN_FAILED}-payload`, data)
    },

    // 注销
    [type.LOGOUT_SUCCESS](state, data) {
        let payload = data.payload
        console.log(`${type.LOGOUT_SUCCESS}-payload`, payload)
        // state
        state.token = null
        state.logoutLoading = payload.logoutLoading
        // storage
        storageHelp.clearStorage()
        console.log('localStorage', localStorage);
        // router
        router.push({
            path: '/login'
        })
    },

    // 注销失败
    [type.LOGOUT_FAILED](state, data) {
        console.log(`${type.LOGOUT_FAILED}-payload`, data)
    },

    // 重新授权
    [type.CLEAR_TOKEN](state, data) {
        // state
        state.accessToken = null
        // storage
        storageHelp.clearStorage()
        // router
        router.push({
            path: '/login'
        })
    }
}
