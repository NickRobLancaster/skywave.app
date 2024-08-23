// src/store.js
import { defineStore } from "pinia";

// Define a store
export const useWebsiteStore = defineStore("main", {
  state: () => {
    return {
      compliance_mode: true,

      toast_notifications: [],

      routeHistory: [],

      onboarding_form: "https://form.jotform.com/242007152609045",
      //company details
      company: {
        name: "Skywave CRM",
        email: "info@skywave.app",
        phone: "8556866162",
        address: {
          building: "Skywave Inc.",
          street: "17130 Van Buren Blvd",
          street2: "Suite 408",
          city: "Riverside",
          state: "CA",
          zip: "92504",
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

      features: [
        { name: "Dashboards", icon: "fa-chart-bar" },
        { name: "Call Tracking", icon: "fa-phone" },
        { name: "Custom Reporting", icon: "fa-file-alt" },
        { name: "Custom Data Filtering", icon: "fa-filter" },
        { name: "Chat System", icon: "fa-comments" },
        { name: "Appointments", icon: "fa-calendar-alt" },
        { name: "Audit Trail", icon: "fa-history" },
        { name: "Role Based Permissions", icon: "fa-user-lock" },
        { name: "Leaderboards", icon: "fa-trophy" },
        { name: "Conversational SMS", icon: "fa-sms" },
        { name: "Client Inboxes", icon: "fa-inbox" },
        { name: "Document Library", icon: "fa-folder-open" },
        { name: "E-Signatures", icon: "fa-pen-square" },
        { name: "Operator Panel", icon: "fa-headset" },
        { name: "Automated Workflows", icon: "fa-cogs" },
        { name: "Qualification System", icon: "fa-check-circle" },
        { name: "Industry Pre-configuration", icon: "fa-industry" },
        { name: "Conversational Email", icon: "fa-envelope" },
        { name: "Client Portal", icon: "fa-users" },
        { name: "Commission Tracking", icon: "fa-dollar-sign" },
        { name: "ACH & CC Processing", icon: "fa-credit-card" },
        { name: "Dialer Integration", icon: "fa-phone-alt" },
        { name: "Templates", icon: "fa-file" },
        { name: "Ping/Post API", icon: "fa-share" },
        { name: "Cloud Security", icon: "fa-cloud" },
        { name: "Calendaring", icon: "fa-calendar" },
        { name: "Sales Script", icon: "fa-file-signature" },
        { name: "Knowledgebase", icon: "fa-book" },
        { name: "Accounting", icon: "fa-money-bill" },
        { name: "Notes", icon: "fa-sticky-note" },
      ],

      showGetStarted: false,
      showHamburgerMenu: false,
      showSupportChat: false,
    };
  },
  actions: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100; // Adjust this value as needed
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
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
      console.log("GLOBAL TOGGLE", this[itemToToggle]);
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
