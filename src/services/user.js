import http from "./http"
import {url} from './configUrl.json'

//add user
export const registerUserApi=(user)=>{
    return http.post(`${url}/users`,JSON.stringify( user))
}