<script setup>
import { ref } from "vue";
//import router and route
import { useRoute, useRouter } from "vue-router";

import { useWebsiteStore } from "../../stores/websiteStore";

const router = useRouter();
const route = useRoute();

const websiteStore = useWebsiteStore();
</script>

<template>
  <!-- MOST LIKELY A DROP IN CHAT SYSTEM - THIS BUTTON WILL TRIGGER IT -->
  <button
    @click="websiteStore.toggleOpen('showGetStarted')"
    class="active:animate-press bg-emerald-500 text-white rounded-full px-4 py-3 shadow-md"
  >
    Get Started
  </button>
</template>
