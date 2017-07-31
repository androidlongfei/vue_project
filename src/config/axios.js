import axios from 'axios'
import {
    baseUrl
} from './env'
import storage from './storageHelp'

import store from '../store'
import * as authType from '../page/auth/module'


// 创建axios实例
const service = axios.create({
    baseURL: baseUrl, // api的base_url
    timeout: 6000 // 请求超时时间
})

// request 请求拦截器, 主要是请求统一增加token
service.interceptors.request.use(config => {
    if (storage.accessToken) {
        // 让每个请求携带Token, 根据后台配置
        config.headers['Token'] = storage.accessToken
    }
    return config
}, error => {
    // error
    console.log(error);
    Promise.reject(error);
})

// response 响应拦截器, 主要是对错误统一处理
service.interceptors.response.use(
    response => {
        console.log('response', response)
        return response
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    store.commit(authType.CLEAR_TOKEN)
                    break
                case 402:
                    break
            }
        }
        return Promise.reject(error.response.data)
    })

export default service
