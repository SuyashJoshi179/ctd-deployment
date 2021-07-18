import axios from 'axios';

const BASE_URL = window.location.origin + '/api';
            
const axiosInstance = axios.create({
    baseURL:BASE_URL,
    timeout:50000,
    headers:{
        Authorization:localStorage.getItem('token')
        ? "Token "+localStorage.getItem('token') 
        : null,
        "Content-Type":"application/json",
        accept:"application/json",
    },
});

export default axiosInstance;
