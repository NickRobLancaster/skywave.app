<script setup>
import { ref } from "vue";

import { useWebsiteStore } from "../../stores/websiteStore";

const websiteStore = useWebsiteStore();

const integrations = ref([
  {
    name: "Payment Processors",
    released: true,
    pathName: "payment-processors",
  },
  {
    name: "SMS",
    released: true,
    pathName: "sms",
  },
  {
    name: "Email SMTP's",
    released: true,
    pathName: "emails-smtp",
  },
  {
    name: "Electronic Signature",
    released: true,
    pathName: "electronic-signatures",
  },
  {
    name: "Webhooks",
    released: true,
    pathName: "webhooks",
  },
]);
</script>

<template>
  <div
    class="flex flex-col md:flex-row w-full rounded-t-xl md:rounded-xl overflow-clip"
  >
    <div class="bg-slate-300 max-w-full flex flex-row md:h-full">
      <div class="flex flex-row md:flex-col gap-4 p-2 overflow-x-auto">
        <router-link
          v-for="(item, i) in integrations"
          :key="i"
          :to="{ name: item.pathName }"
          @click="websiteStore.scrollToSection('products-preview')"
          :class="`${
            !item.released
              ? 'disabled pointer-events-none bg-gray-500 text-gray-50 hover:text-white hover:bg-indigo-700'
              : 'bg-gray-50 text-gray-600 hover:text-white hover:bg-indigo-700'
          } btn border-none rounded-full px-4 py-2 shadow-md`"
          class="relative btn border-none rounded-full px-4 py-2 shadow-md bg-gray-50 hover:text-white hover:bg-indigo-700"
          active-class="disabled bg-indigo-500 hover:bg-indigo-700 text-white"
        >
          {{ item.name }}

          <span
            v-if="!item.released"
            class="absolute -bottom-2 right-0 bg-rose-400 py-1 px-2 rounded-full text-xs text-white"
          >
            Coming Soon
          </span>
        </router-link>
      </div>
    </div>

    <div class="flex-1 h-full bg-slate-300">
      <router-view />
    </div>
  </div>
</template>
