import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import "./assets/css/transitions.css";
import VueClickAway from "vue3-click-away";

createApp(App).use(store).use(VueClickAway).mount("#app");
