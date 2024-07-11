<script setup>
import { ref } from "vue";

import { useWebsiteStore } from "../../stores/websiteStore";

const websiteStore = useWebsiteStore();
</script>

<template>
  <!-- HERO -->
  <div
    class="h-screen flex flex-col justify-center items-center gap-10 p-5 bg-gradient-to-b from-blue-900 to-blue-400 text-white"
  >
    <h1 class="text-5xl font-bold text-center">Skywave CRM</h1>
    <p class="text-2xl text-center">It's Time to Automate Your Workflows</p>
    <button
      @click="websiteStore.scrollToSection('automation-preview')"
      class="active:animate-press bg-blue-500 text-white rounded-full px-5 py-4 shadow-md"
    >
      See How
    </button>
  </div>

  <div
    class="bg-blue-400 flex flex-row justify-center max-md:pb-6 md:pb-44 px-5"
  >
    <div
      class="rounded-xl bg-gray-50 p-4 md:px-8 md:pb-8 -mt-8 md:-mt-52 container"
    >
      <video
        id="automation-preview"
        controls
        class="-mt-12 mb-1 rounded p-2 border border-slate-400 shadow-lg shadow-blue-400 glass"
      >
        <source src="/images/automation-preview.mp4" type="video/mp4" />
      </video>

      <!-- <img
        src="../../public/images/sw-v2-contact-file.png"
        alt=""
        class="-mt-12 mb-1 rounded p-2 border border-slate-400 shadow-lg shadow-blue-400 glass"
      /> -->
    </div>
  </div>
</template>
