import http from "./http"
import {url} from './configUrl.json'

//get data for homePage carousell
export const getProductsApi=async()=>{
    return  await http.get(`${url}/products`)
}

//get data in category for other routes
export const getProductsCategoryApi=async({api,params})=>{
    console.log('params',params);
    return await http.get(`${url}/products/category/${api}`,{params})
}

