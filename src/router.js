// src/router.js
import { createRouter, createWebHistory, onBeforeRouteLeave } from "vue-router";

import { useWebsiteStore } from "./../stores/websiteStore";

const routes = [
  {
    path: "/",
    name: "root",
    component: () => import("./components/Website.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        components: { root: () => import("./components/Home.vue") },
      },
      {
        path: "/products",
        name: "products",
        components: { root: () => import("./components/Products.vue") },
      },
      {
        path: "/features",
        name: "features",
        components: { root: () => import("./components/Features.vue") },
      },
      {
        path: "/pricing",
        name: "pricing",
        components: { root: () => import("./components/Pricing.vue") },
      },
      {
        path: "/get-started",
        name: "get-started",

        components: {
          modals: () => import("./components/GettingStarted.vue"),
        },
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
