import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './store/index'
const FastClick = require('fastclick')

// use element-ui
Vue.use(Element)

FastClick.attach(document.body)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: {
        App
    }
})
