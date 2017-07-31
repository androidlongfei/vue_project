// 主要处理异步逻辑

import * as type from './mutations_types'
import {
    login
} from '../../../service/Auth'

export default {
    [type.LOGIN]({
        dispatch,
        commit,
        state
    }, data) {
        console.log(`${type.LOGIN_SUCCESS}-data-payload`, data.payload)
        state.loginLoading = true
        let payload = data.payload
        let sendData = {
            userName: payload.userName,
            passWord: payload.passWord
        }
        login(sendData).then(res => {
            commit({
                type: type.LOGIN_SUCCESS,
                payload: {
                    loginLoading: false,
                    rememberMe: payload.rememberMe,
                    result: res
                }
            })
        }).catch((ex) => {
            console.log('error', ex)
            commit({
                type: type.LOGIN_FAILED,
                payload: {
                    loginLoading: false,
                    errorMsg: {}
                }
            })
        })
    }
}
