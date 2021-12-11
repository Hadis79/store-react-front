
import axios from 'axios'

axios.defaults.headers["Content-Type"]='appliaction/json'

export default {
    get:axios.get,
    post:axios.post,
    put:axios.put,
    delete:axios.delete
}