
import axios from 'axios'

axios.defaults.headers["Content-Type"]='application/json'

export default {
    get:axios.get,
    post:axios.post,
    put:axios.put,
    delete:axios.delete
}