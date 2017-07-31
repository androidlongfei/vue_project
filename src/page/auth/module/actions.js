// 主要处理异步逻辑

import * as type from './mutations_types'
import {
    login,
    logout
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
            username: payload.username,
            password: payload.password
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
    },

    [type.LOGOUT]({
        dispatch,
        commit,
        state
    }, data) {
        state.logoutLoading = true
        let sendData = {
            username: state.username
        }
        logout(sendData).then(res => {
            commit({
                type: type.LOGOUT_SUCCESS,
                payload: {
                    logoutLoading: false,
                    result: res
                }
            })
        }).catch((ex) => {
            console.log('error', ex)
            commit({
                type: type.LOGOUT_FAILED,
                payload: {
                    logoutLoading: false,
                    errorMsg: {}
                }
            })
        })
    }
}
