import actions from './actions';
import mutations from './mutations';
import getters from './getters';

// 初始化state状态
const state = {
    userList: [],
    loading: false,
    currentUser: {}
}

export default {
    state,
    getters,
    actions,
    mutations
}
