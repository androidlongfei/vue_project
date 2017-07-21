import fetch from '../config/fetch'

// 获取所有用户
export const findAll = () => fetch('/user');

// 获取单个用户
export const findById = userId => fetch('/user', {
    'userId': userId
});

// 增加用户
export const addUser = (userInfo) => fetch('/user', userInfo, 'POST')
