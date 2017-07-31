// 主要处理异步逻辑

import * as type from './mutations_types'
import {
    findAll
} from '../../../service/User'

export default {
    [type.FETCH_USER_LIST]({
        dispatch,
        commit,
        state
    }, data) {
        // console.log(`${type.FETCH_USER_LIST}-dispatch`, dispatch)
        // console.log(`${type.FETCH_USER_LIST}-commit`, commit)
        // console.log(`${type.FETCH_USER_LIST}-state`, state)
        console.log(`${type.FETCH_USER_LIST}-data`, data)
        findAll().then(res => {
            commit({
                type: type.FETCH_USER_LIST_SUCCESS,
                payload: {
                    loading: false,
                    userList: res
                }
            })
        }).catch((ex) => {
            console.log('error', ex)
            commit({
                type: type.FETCH_USER_LIST_FAILED,
                payload: {
                    loading: false,
                    errorMsg: {}
                }
            })
        })
    }
}
