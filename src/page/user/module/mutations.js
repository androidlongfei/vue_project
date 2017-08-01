// 处理同步逻辑

import * as type from './mutations_types'

export default {
    // 加载用户列表之前
    [type.FETCH_USER_LIST_BEFORE](state, data) {
        console.log(`${type.FETCH_USER_LIST_BEFORE}-data`, data)
        state.loading = data.loading
    },

    // 加载用户列表成功之后
    [type.FETCH_USER_LIST_SUCCESS](state, data) {
        // console.log(`${type.FETCH_USER_LIST_SUCCESS}-state`, state)
        console.log(`${type.FETCH_USER_LIST_SUCCESS}-payload`, data.payload)
        state.userList = data.payload.userList
        state.userTotal = data.payload.userTotal
        state.loading = data.payload.loading
    },

    // 加载用户列表失败之后
    [type.FETCH_USER_LIST_FAILED](state, data) {
        // console.log(`${type.FETCH_USER_LIST_FAILED}-state`, state)
        console.log(`${type.FETCH_USER_LIST_FAILED}-data`, data)
        state.loading = data.payload.loading
    },

    [type.SWITCH_USER](state, data) {
        // console.log(`${type.FETCH_USER_LIST_BEFORE}-state`, state)
        console.log(`${type.FETCH_USER_LIST_BEFORE}-data`, data)
        state.chooseUser = data.payload.chooseUser
    }
}
