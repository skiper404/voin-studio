import "./assets/main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { createPinia } from "pinia";

import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";

AOS.init();
const pinia = createPinia();

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(pinia).use(VuePlyr).mount("#app");
