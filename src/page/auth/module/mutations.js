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
        // storage
        storageHelp.rememberMe = payload.rememberMe
        storageHelp.currentUserName = payload.result.userName
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
    }
}
