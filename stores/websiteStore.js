// src/store.js
import { defineStore } from "pinia";

// Define a store
export const useWebsiteStore = defineStore("main", {
  state: () => {
    return {
      routeHistory: [],
      //company details
      company: {
        name: "Skywave CRM",
        email: "",
        phone: "",
        address: {
          street: "",
          street2: "",
          city: "",
          state: "",
          zip: "",
        },
      },

      user: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: {
          street: "",
          street2: "",
          city: "",
          state: "",
          zip: "",
        },
        password: "",
      },

      showGetStarted: false,
      showHamburgerMenu: false,
      showSupportChat: false,
    };
  },
  actions: {
    toggleOpen(itemToToggle) {
      console.log("GLOBAL TOGGLE", itemToToggle);
      this[itemToToggle] = true;
    },
    toggleClose(itemToToggle) {
      this[itemToToggle] = false;
    },

    addToHistory(from) {
      if (this.routeHistory.length >= 20) {
        this.routeHistory.shift();
        this.routeHistory.push(from.fullPath);
      } else {
        this.routeHistory.push(from.fullPath);
      }
    },

    getPreviousRoute() {
      return this.routeHistory[routeHistory.length - 2] || null;
    },

    removeLastRoute() {
      this.routeHistory.pop();
    },
  },
  getters: {
    doubleCount() {
      return this.count * 2;
    },
  },
});
