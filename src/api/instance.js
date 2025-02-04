import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;