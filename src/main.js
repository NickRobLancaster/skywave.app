import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style/index.css";
import router from "./router";
import { autoRegisterGlobalComponents } from "./../utils/autoRegisterComponents";

import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

const app = createApp(App);

const pinia = createPinia();

library.add(fas, far, fab);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.use(pinia);

autoRegisterGlobalComponents(app);

app.mount("#app");
