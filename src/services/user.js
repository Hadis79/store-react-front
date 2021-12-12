import http from "./http"
import {url} from './configUrl.json'


export const registerUserApi=()=>{
    return http.post(`${url}/users`,{body:JSON.stringify(  {
        email:'John@gmail.com',
        username:'johnd',
        password:'m38rmF$',
        name:{
            firstname:'John',
            lastname:'Doe'
        },
        address:{
            city:'kilcoole',
            street:'7835 new road',
            number:3,
            zipcode:'12926-3874',
            geolocation:{
                lat:'-37.3159',
                long:'81.1496'
            }
        },
        phone:'1-570-236-7033'
    })})
}