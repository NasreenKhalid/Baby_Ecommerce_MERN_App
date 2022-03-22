import axios from "axios";

//const BASE_URL ="http://localhost:5000/api";
const BASE_URL ="https://ecommerce-babyprodcts-app.herokuapp.com/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjVlNzY2MzlhN2JhMjU0NWQ1MmFjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzM0OTA1MCwiZXhwIjoxNjQ3NDM1NDUwfQ.0r6sMk5t_bIZ1PkVgEW5psFgk1kIaQaPRPA1XqllTyU"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
})
