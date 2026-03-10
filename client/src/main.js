import "./assets/main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { createPinia } from "pinia";
import { router } from "./router/router";


AOS.init();
const pinia = createPinia();

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(pinia).use(router).mount("#app");
