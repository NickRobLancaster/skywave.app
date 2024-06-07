<script setup>
import { ref } from "vue";

import { useWebsiteStore } from "../../stores/websiteStore";

const websiteStore = useWebsiteStore();
</script>

<template>
  <div
    class="h-full max-md:w-full overflow-y-auto flex flex-col md:flex-row divide-gray-300 divide-y bg-white text-center"
  >
    <div class="flex flex-row items-center p-2">
      <p class="md:hidden">Menu</p>
      <button
        @click="websiteStore.toggleClose('showHamburgerMenu')"
        class="md:hidden ml-auto active:animate-press text-2xl px-3 py-1 rounded"
      >
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
    </div>
    <router-link
      @click="websiteStore.toggleClose('showHamburgerMenu')"
      to="/home"
      active-class="bg-blue-200 text-blue-600"
      class="text-2xl text-gray-600 p-5 active:animate-press cursor-pointer hover:bg-gray-200"
      >Home</router-link
    >

    <router-link
      @click="websiteStore.toggleClose('showHamburgerMenu')"
      to="/products"
      active-class="bg-indigo-200 text-indigo-600"
      class="text-2xl text-gray-600 p-5 active:animate-press cursor-pointer hover:bg-gray-200"
      >Products</router-link
    >

    <router-link
      @click="websiteStore.toggleClose('showHamburgerMenu')"
      to="/features"
      active-class="bg-purple-200 text-purple-600"
      class="text-2xl text-gray-600 p-5 active:animate-press cursor-pointer hover:bg-gray-200"
      >Features</router-link
    >

    <router-link
      @click="websiteStore.toggleClose('showHamburgerMenu')"
      to="/pricing"
      active-class="bg-emerald-200 text-emerald-600"
      class="text-2xl text-gray-600 p-5 active:animate-press cursor-pointer hover:bg-gray-200"
      >Pricing</router-link
    >
  </div>
</template>
