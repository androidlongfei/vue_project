import actions from './actions';
import mutations from './mutations';
import getters from './getters';

// 初始化state状态
const state = {
    token: '',
    loginLoading: false,
    logoutLoading: false,
    currentUser: {}
}

export default {
    state,
    getters,
    actions,
    mutations
}
