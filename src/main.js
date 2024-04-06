import { createApp } from "vue";
import "./style/index.css";

import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

const app = createApp(App);

library.add(fas, far, fab);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
