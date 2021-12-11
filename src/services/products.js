import http from "./http"
import {url} from './configUrl.json'


export const getProductsApi=()=>{
    return http.get(`${url}/products`)
}