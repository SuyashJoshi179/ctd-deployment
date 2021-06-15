import axios from 'axios';
const BASE_URL = "http://127.0.0.1:8000";

const axiosInstance = axios.create({
    baseURL:BASE_URL,
    timeout:5000,
    headers:{
        Authorization:localStorage.getItem('token')
        ? "Token "+localStorage.getItem('token') 
        : null,
        "Content-Type":"application/json",
        accept:"application/json",
    },
});

export default axiosInstance;