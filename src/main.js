import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
createApp(App).use(router).use(createPinia()).mount("#app");
