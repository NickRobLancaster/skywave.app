// src/utils/autoRegisterComponents.js

import { defineAsyncComponent } from "vue";

export function autoRegisterGlobalComponents(app) {
  const components = import.meta.glob("./../src/components/**/*.vue");

  for (const path in components) {
    const componentName = path
      .split("/")
      .pop()
      .replace(/\.\w+$/, "");

    console.log(`Registering component: ${componentName}`); // Debugging log

    app.component(componentName, defineAsyncComponent(components[path]));
  }
}
