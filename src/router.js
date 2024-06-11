// src/router.js
import { createRouter, createWebHistory, onBeforeRouteLeave } from "vue-router";

import Website from "./components/Website.vue";
import Home from "./components/Home.vue";
import Products from "./components/Products.vue";
import Features from "./components/Features.vue";
import Pricing from "./components/Pricing.vue";
import GettingStarted from "./components/GettingStarted.vue";

import { useWebsiteStore } from "./../stores/websiteStore";

const routes = [
  {
    path: "/",
    name: "root",
    component: Website,
    redirect: { name: "home" },
    children: [
      {
        path: "home", // Path should be relative
        name: "home",
        components: { root: Home },
      },
      {
        path: "products", // Path should be relative
        name: "products",
        components: { root: Products },
      },
      {
        path: "features", // Path should be relative
        name: "features",
        components: { root: Features },
      },
      {
        path: "pricing", // Path should be relative
        name: "pricing",
        components: { root: Pricing }, // Fixed components declaration
      },
      {
        path: "get-started", // Path should be relative
        name: "get-started",
        components: { modals: GettingStarted }, // Fixed component declaration
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const websiteStore = useWebsiteStore();
  websiteStore.addToHistory(from);

  console.log(websiteStore.routeHistory);

  next();
});

export default router;
