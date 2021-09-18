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
  refreshToken(payload) {
    return apiClient.post("/refresh-token", payload);
  },
  logout(payload) {
    return apiClient.post("/logout", payload);
  },
  addTodo(payload) {
    return apiClient.post("/todos", payload);
  },
};