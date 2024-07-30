<script setup>
import { ref, reactive, onMounted, computed, onUnmounted } from "vue";

import { useWebsiteStore } from "../../stores/websiteStore";

const websiteStore = useWebsiteStore();

const pillMenu = ref([
  {
    name: "CRM",
    pathName: "crm",
    modules: [
      {
        name: "Debt Settlement Calculator",
        released: true,
        pathName: "debt-settlement",
      },
      {
        name: "Credit Repair Dispute System",
        released: true,
        pathName: "credit-repair",
      },

      {
        name: "Student Loan Qualification",
        released: true,
        pathName: "student-loan",
      },
      {
        name: "Tax Resolution",
        released: false,
        pathName: "tax-resolution",
      },
      {
        name: "MCA Management",
        released: false,
        pathName: "merchant-cash-advances",
      },

      {
        name: "SBA Loans",
        released: false,
        pathName: "sba-loans",
      },

      {
        name: "Tax Overages",
        released: false,
        pathName: "tax-overages",
      },
    ],
  },
  {
    name: "Integrations",
    pathName: "integrations",
    modules: [],
  },
]);
</script>

<template>
  <!-- HERO -->
  <div
    class="h-screen flex flex-col justify-center items-center gap-10 p-5 bg-gradient-to-b from-indigo-500 to-indigo-300 text-white"
  >
    <h1 class="text-5xl font-bold">Products</h1>
    <p class="text-2xl text-center">Our Suite of Software Solutions</p>
    <!-- <button
      class="active:animate-press bg-blue-500 text-white rounded-full px-4 py-3 shadow-md"
    >
      Get Started
    </button> -->
  </div>

  <div class="bg-indigo-300 flex flex-row justify-center pb-44 px-5">
    <div
      class="rounded-xl bg-gray-50 p-4 md:px-8 -mt-52 md:pb-8 flex flex-row justify-center container"
    >
      <div
        class="-mt-12 bg-gray-50 p-5 w-full rounded-xl flex flex-col gap-5 items-center shadow-lg shadow-indigo-300"
      >
        <!-- pill nav -->
        <div class="bg-gray-200 rounded-full max-w-full">
          <div class="flex flex-row gap-4 overflow-x-auto rounded-full p-2">
            <router-link
              v-for="(item, i) in pillMenu"
              :key="i"
              :to="{ name: item.pathName }"
              class="relative btn border-none rounded-full px-4 py-2 shadow-md bg-gray-50 text-gray-600 hover:text-white hover:bg-indigo-700"
              active-class="disabled bg-indigo-500 hover:bg-indigo-700 text-white"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- vue sub router to products route -->
        <router-view />
      </div>
    </div>
  </div>
</template>
