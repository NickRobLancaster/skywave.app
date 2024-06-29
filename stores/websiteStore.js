// src/store.js
import { defineStore } from "pinia";

// Define a store
export const useWebsiteStore = defineStore("main", {
  state: () => {
    return {
      toast_notifications: [],

      routeHistory: [],
      //company details
      company: {
        name: "Skywave CRM",
        email: "info@skywave.app",
        phone: "8556866162",
        address: {
          building: "Tibbetts Porfessional Building",
          street: "3742 Tibbetts St",
          street2: "Suite 101",
          city: "Riverside",
          state: "CA",
          zip: "92506",
        },

        social: {
          facebook:
            "https://www.facebook.com/people/skywavecrm/100063770514825/",
          twitter: "https://twitter.com/skywave_app",
          linkedin: "https://www.linkedin.com/company/skywave-app/",
          instagram: "https://www.instagram.com/skywave_app/",
          tiktok: "",
        },

        links: {
          google_maps:
            "https://www.google.com/maps/place/Datacore+CRM/@33.9470667,-117.4009004,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcb15fe6a4b84f:0x976dd481cf9be3a!8m2!3d33.9470667!4d-117.3983255!16s%2Fg%2F11fsqkmnn9?entry=ttu",
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
      },

      showGetStarted: false,
      showHamburgerMenu: false,
      showSupportChat: false,
    };
  },
  actions: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },

    instantTop() {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    },

    toggleOpen(itemToToggle) {
      console.log("GLOBAL TOGGLE", itemToToggle);
      this[itemToToggle] = true;
    },

    toggleClose(itemToToggle) {
      this[itemToToggle] = false;
    },

    addToast(notification) {
      this.toast_notifications.push({
        type: notification.type, // success / error
        title: notification.title,
        message: notification.message,
      });

      setTimeout(() => {
        this.toast_notifications.shift();
      }, 2000);
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
