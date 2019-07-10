import axios from 'axios';

const api = axios.create({
    baseURL: 'https://athenas-backend.herokuapp.com'
});

export default api;