import fetch from '../config/fetch'

// 登录
export const login = (data) => fetch('/login', data, 'POST')

// 登出
export const logout = (data) => fetch('/logout', data, 'POST')
