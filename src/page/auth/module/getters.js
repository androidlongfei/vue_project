//  store 的计算属性

export default {
    loginLoading: state => {
        return state.loginLoading
    },

    token: state => {
        return state.token
    },

    currentUser: state => {
        return state.currentUser
    },
    username: state => {
        return state.currentUser.username
    }
}
