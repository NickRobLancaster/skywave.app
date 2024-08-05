import { createApp } from "vue";
import { createPinia } from "pinia";
import { createAutoAnimatePlugin } from "@formkit/addons";
import { plugin, defaultConfig } from "@formkit/vue";
import "./style/index.css";
import router from "./router";
import { autoRegisterGlobalComponents } from "./../utils/autoRegisterComponents";

import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import VueKonva from "vue-konva";

const app = createApp(App);

const pinia = createPinia();

library.add(fas, far, fab);

app.use(VueKonva);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.use(pinia);

app.use(
  plugin,
  defaultConfig({
    plugins: [
      createAutoAnimatePlugin(
        {
          /* optional AutoAnimate config */
          // default:
          duration: 250,
          easing: "ease-in-out",
          delay: 0,
        },
        {
          /* optional animation targets object */
          // default:
          global: ["outer", "inner"],
          form: ["form"],
          repeater: ["items"],
        }
      ),
    ],
  })
);

autoRegisterGlobalComponents(app);

app.mount("#app");
