import axios from 'axios'
import { api } from './constants'

export const loginService = (login) => {
    const userdata =
    {
        "EmailID": login.email,
        "Password": login.password,
        "isSuperUser": true
    }
    return axios.post(`${api}/authsuperusers`, userdata)
}

export const setUserToken = (token) => {
    localStorage.setItem("a-key", token)
}

export const getUserToken = ()=>{
    return localStorage.getItem("a-key")
}

export const logoutService = ()=>{
    return localStorage.removeItem("a-key")
}