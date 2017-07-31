// 处理同步逻辑

import * as type from './mutations_types'
import storageHelp from '../../../config/storageHelp'
import router from '../../../router'

export default {
    // 登录成功
    [type.LOGIN_SUCCESS](state, data) {
        console.log(`${type.LOGIN_SUCCESS}-data`, data)
        let payload = data.payload
        console.log('payload', payload);
        // state
        state.accessToken = payload.result.accessToken
        state.loginLoading = payload.loginLoading
        state.currentUser = payload.result.user
        // storage
        storageHelp.rememberMe = payload.rememberMe
        storageHelp.currentUsername = payload.result.user.username
        storageHelp.setRemeberUsername(payload.result.user.username)
        storageHelp.accessToken = payload.result.accessToken
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
        console.log(`${type.LOGOUT_SUCCESS}-data`, data)
        let payload = data.payload
        console.log('payload', payload);
        // state
        state.accessToken = null
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
    }
}
