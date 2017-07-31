//  store 的计算属性

export default {
    aboutUserList: (state, getters, rootState) => {
        // console.log('about', rootState)
        // console.log('rootState.user.userList', rootState.user.userList)
        return rootState.user.userList
    }
}
