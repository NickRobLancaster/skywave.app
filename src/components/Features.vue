<script setup>
import { ref } from "vue";

import { useWebsiteStore } from "../../stores/websiteStore";

const websiteStore = useWebsiteStore();
</script>

<template>
  <!-- HERO -->
  <div
    class="h-screen flex flex-col justify-center items-center gap-10 p-5 bg-gradient-to-b from-purple-500 to-purple-300 text-white"
  >
    <h1 class="text-5xl font-bold">Features</h1>
    <p class="text-2xl text-center">
      A Toolbelt of Features to Keep Your Operations Smooth and Seamless
    </p>
  </div>

  <div class="bg-purple-300 flex flex-row justify-center pb-44 px-5">
    <div
      class="rounded-xl bg-gray-50 p-4 md:px-8 -mt-52 md:pb-8 flex flex-row justify-center container"
    >
      <div class="-mt-12 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
        <!-- BASE PLAN -->
        <div
          v-for="(feature, i) in websiteStore.features"
          class="rounded p-5 border border-slate-400 shadow-lg glass bg-gray-50 h-52 flex flex-col justify-center items-center"
        >
          <font-awesome-icon
            :icon="['fas', feature.icon]"
            class="text-5xl text-gray-600"
          />

          <h3 class="text-xl text-gray-500 p-4 text-center">
            {{ feature.name }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
