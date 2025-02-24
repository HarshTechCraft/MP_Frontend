import axios from "axios";

const api = axios.create({
  baseURL: "https://ml-backend-4f5t.onrender.com/api",
});
export default api;
