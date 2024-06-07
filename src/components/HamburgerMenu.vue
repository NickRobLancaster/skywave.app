<script setup>
import { ref } from "vue";

import { useWebsiteStore } from "../../stores/websiteStore";

const websiteStore = useWebsiteStore();
</script>

<template>
  <button
    @click="websiteStore.toggleOpen('showHamburgerMenu')"
    class="md:hidden sw-btn ml-auto sw-font sw-border active:animate-press"
  >
    <font-awesome-icon :icon="['fas', 'bars']" />
  </button>

  <Teleport to="#modals">
    <transition
      enter-active-class="transition-opacity duration-500 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-500 ease-in-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="websiteStore.showHamburgerMenu"
        class="fixed h-screen w-screen bg-gradient-to-br from-blue-700 to-blue-300 z-50"
      ></div>
    </transition>

    <transition
      enter-active-class="transition-transform duration-500 ease-in-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-500 ease-in-out"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="websiteStore.showHamburgerMenu"
        class="fixed h-screen w-screen z-60"
      >
        <Navigation />
      </div>
    </transition>
  </Teleport>
</template>
