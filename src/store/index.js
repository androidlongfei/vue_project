import Vue from 'vue';
import Vuex from 'vuex';

import configStore from './config'
import userStore from '../page/user/model'
import aboutStore from '../page/about/model'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        'config': configStore,
        'user': userStore,
        'about': aboutStore
    }
});
