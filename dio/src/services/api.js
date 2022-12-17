import axios from "axios";

// terminal -> json-server --watch db.json -p 8001

export const api = axios.create({
    baseURL: 'http://localhost:8001',
})