import axios from "axios";

const api = axios.create({
    baseURL: 'https://6647cab52bb946cf2f9ee23e.mockapi.io'
})

export default api;