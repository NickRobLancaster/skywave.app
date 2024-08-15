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
  <a
    :href="websiteStore.onboarding_form"
    target="_blank"
    class="active:animate-press inline-block bg-emerald-500 text-white rounded-full px-4 py-3 shadow-md"
  >
    Get Started
  </a>
</template>
