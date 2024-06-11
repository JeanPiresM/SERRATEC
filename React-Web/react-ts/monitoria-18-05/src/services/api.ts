import axios from "axios";

const api = axios.create({
    baseURL: 'https://6648c7fa4032b1331bec6838.mockapi.io'
})

export default api;