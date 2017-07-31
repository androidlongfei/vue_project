import Vue from 'vue';
import Vuex from 'vuex';

import configStore from './config'
import userStore from '../page/user/module'
import aboutStore from '../page/about/module'
import authStore from '../page/auth/module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        'config': configStore,
        'user': userStore,
        'about': aboutStore,
        'authStore': authStore
    }
});
