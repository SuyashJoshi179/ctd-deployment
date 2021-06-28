import axios from 'axios';

let DjangoServerUrl = window.location.origin + "/apiv1"; // Server URL


let DjangoServer = axios.create({               // instance
    baseURL: DjangoServerUrl,
    headers: { "Content-Type": "application/json" }
})


export default DjangoServer;
