import axios from "axios";

const baseURL = "http://localhost:3000";

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  register(payload) {
    return apiClient.post("/register", payload);
  },
  login(payload) {
    return apiClient.post("/login", payload);
  },
  addTodo(payload) {
    return apiClient.post("/todos", payload);
  },
};
