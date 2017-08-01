// import fetch from '../config/fetch'
import fetch from '../config/axios'

// 获取所有用户, 分页查询
export const findAll = (start, count) => fetch('/user', {
    start: start,
    count: count
})

// 获取单个用户
export const findById = userId => fetch('/user', {
    'userId': userId
})

// 增加用户
export const addUser = (userInfo) => fetch('/user', userInfo, 'POST')
