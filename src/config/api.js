import axios from "axios";


const api = axios.create({
    baseURL: 'https://authentication-k6se.onrender.com/auth/'
});


export default api;