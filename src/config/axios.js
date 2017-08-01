import axios from 'axios'
import {
    baseUrl
} from './env'
import storage from './storageHelp'

import store from '../store'
import * as authType from '../page/auth/module/mutations_types'


// 创建axios实例
const service = axios.create({
    baseURL: baseUrl, // api的base_url
    timeout: 6000, // 请求超时时间
    withCredentials: false, // 表示跨域请求时是否需要使用凭证。默认不需要
    responseType: 'json', // 表示服务器响应的数据类型。默认为json
    validateStatus: status => {
        // 200~300之间resolve，其余的reject
        return status >= 200 && status < 300
    }
})

// request 请求拦截器, 主要是请求统一增加token
service.interceptors.request.use(config => {
    if (storage.token) {
        // 让每个请求携带accessToken, 根据后台配置
        config.headers.token = storage.token
    }
    return config
}, error => {
    // error
    console.log('interceptors request', error)
    Promise.reject(error)
})

// response 响应拦截器, 主要是对错误统一处理
service.interceptors.response.use(
    response => {
        // status code 200~300之间
        console.log('response all', response)
        return response.data
    },
    error => {
        if (error.response) {
            console.log('response error', error)
            switch (error.response.status) {
                case 400:
                    // 400 页面不存在
                    break;
                case 401:
                    // 401 需要授权或者令牌过期。清除token信息并跳转到登录页面
                    store.commit(authType.CLEAR_TOKEN)
                    break;
                case 500:
                    // 500 服务器内部出错
                    break;
            }
        }
        return Promise.reject(error.response.data)
    })

export default async(url = '', data = {}, requesTtype = 'GET') => {
    const type = requesTtype.toUpperCase()
    let requestConfig = {
        method: type,
        url: url
    }
    if (type === 'GET') {
        requestConfig.params = data
    }
    if (type === 'POST') {
        requestConfig.data = data
    }
    console.log('requestConfig', requestConfig)
    const response = await service(requestConfig)
    console.log('response data', response)
    // const responseJson = await response.json()
    return response
}
