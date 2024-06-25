<script setup>
import { ref, Teleport } from "vue";

import { useWebsiteStore } from "../../stores/websiteStore";

const websiteStore = useWebsiteStore();
</script>

<template>
  <Teleport to="#modals">
    <div class="fixed top-2 right-2 z-50 flex flex-col">
      <transition-group
        name="slide"
        tag="div"
        enter-active-class="transform transition ease-in-out duration-300"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transform transition ease-in-out duration-300"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <div
          v-for="(toast, i) in websiteStore.toast_notifications"
          :key="i"
          class="rounded-lg overflow-clip flex flex-row border-border-slate-400"
          :class="{
            'bg-green-500': toast.type === 'success',
            'bg-red-500': toast.type === 'error',
          }"
        >
          <div class="bg-white flex flex-col justify-center p-3">
            <font-awesome-icon :icon="['fas', 'circle-exclamation']" />
          </div>
          <div class="text-white p-4 rounded-lg shadow-lg">
            <p>{{ toast.message }}</p>
          </div>
        </div>
      </transition-group>
    </div>
  </Teleport>
</template>
