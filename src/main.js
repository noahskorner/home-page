import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/css/reset.css";
import "./assets/css/style.css";

createApp(App).use(store).mount("#app");
