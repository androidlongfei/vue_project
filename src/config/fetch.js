import {
    baseUrl
} from './env'
import 'whatwg-fetch'

export default async(url = '', data = {}, type = 'GET') => {
    type = type.toUpperCase();
    url = baseUrl + url;
    // console.log('url', url);

    let requestConfig = {
        credentials: 'omit', // include:发送Cookie,既可以同域发送，也可以跨域发送。omit:不发送Cookie
        method: type,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors', // 支持跨域请求
        cache: 'force-cache' // 缓存
    }

    // 处理 GET
    if (type === 'GET') {
        let dataStr = ''; // 数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })

        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }

    // 处理POST
    if (type === 'POST') {
        Object.defineProperty(requestConfig, 'body', {
            value: JSON.stringify(data)
        })
    }

    try {
        const response = await fetch(url, requestConfig);
        const responseJson = await response.json();
        return responseJson
    } catch (error) {
        throw new Error(error)
    }
}
