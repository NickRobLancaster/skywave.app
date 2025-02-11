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
    @click="websiteStore.toggleOpen('showScheduleDemo')"
    class="active:animate-press bg-purple-500 text-white rounded-full md:px-4 py-3 shadow-md whitespace-nowrap text-xs md:text-base"
  >
    <span class="px-1"> Schedule Demo </span>
  </button>
</template>
