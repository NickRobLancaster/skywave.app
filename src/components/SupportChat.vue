<script setup>
import { ref } from "vue";

import { useWebsiteStore } from "../../stores/websiteStore";

const websiteStore = useWebsiteStore();
</script>

<template>
  <!-- MOST LIKELY A DROP IN CHAT SYSTEM - THIS BUTTON WILL TRIGGER IT -->
  <button
    class="active:animate-press bg-indigo-500 text-white rounded-full px-4 py-3 lg:px-6 lg:py-5 shadow-md text-xs md:text-base"
  >
    <font-awesome-icon :icon="['fas', 'comments']" />
  </button>
</template>
