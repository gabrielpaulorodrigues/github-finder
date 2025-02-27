import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_GITHUB_API_URL,
    headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`
    }
});