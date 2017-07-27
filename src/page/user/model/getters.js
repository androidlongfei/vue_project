//  store 的计算属性

export default {
    loading: state => {
        return state.loading
    },

    userList: state => {
        return state.userList
    },

    currentUser: state => {
        return state.currentUser
    }
}
