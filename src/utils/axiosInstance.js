import axios from "axios";
const token = localStorage.getItem("token");
console.log("UseDeleteHook token", token);
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8001/mybooks",
  headers: {
    "Content-Type": "application/json",

    Authorization: `Bearer ${token}`,
  },
  timeout: 5000,
});

export default axiosInstance;
