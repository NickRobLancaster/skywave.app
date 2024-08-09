<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import { useWebsiteStore } from "../../stores/websiteStore";

const websiteStore = useWebsiteStore();

const videoElement = ref(null);

let observer;

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      videoElement.value.play().catch((error) => {
        console.error("Error attempting to play the video:", error);
      });
    } else {
      videoElement.value.pause();
    }
  });
};

onMounted(() => {
  if (videoElement.value) {
    observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    observer.observe(videoElement.value);
  }
});

onUnmounted(() => {
  if (observer && videoElement.value) {
    observer.unobserve(videoElement.value);
  }
});
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
      class="rounded-xl bg-gray-50 p-4 md:px-8 md:pb-8 -mt-24 md:-mt-52 md:w-5/6 flex flex-row justify-center"
    >
      <div
        class="-mt-12 mb-1 rounded-xl p-2 border border-slate-400 shadow-lg shadow-blue-400 glass"
      >
        <VideoPreviewComponent
          id="automation-preview"
          src="/images/automation-preview.mp4"
          classes="md:border-b md:border-gray-600"
        />
      </div>

      <!-- <img
        src="../../public/images/sw-v2-contact-file.png"
        alt=""
        class="-mt-12 mb-1 rounded p-2 border border-slate-400 shadow-lg shadow-blue-400 glass"
      /> -->
    </div>
  </div>
</template>
