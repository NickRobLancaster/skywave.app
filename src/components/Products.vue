<script setup>
import { ref, reactive, onMounted, computed, onUnmounted } from "vue";

import { useWebsiteStore } from "../../stores/websiteStore";

const websiteStore = useWebsiteStore();

const chosenPill = ref("crm");

const pillMenu = ref([
  {
    name: "crm",
    modules: [
      {
        name: "Debt Settlement Calculator",
        color: "blue",
        released: true,
        pathName: "debt-settlement",
      },
      {
        name: "Credit Repair Dispute System",
        color: "emerald",
        released: true,
        pathName: "credit-repair",
      },

      {
        name: "Student Loan Qualification",
        color: "purple",
        released: true,
        pathName: "student-loan",
      },
      {
        name: "Tax Resolution",
        color: "gray",
        released: false,
        pathName: "tax-resolution",
      },
      {
        name: "MCA Management",
        color: "gray",
        released: false,
        pathName: "merchant-cash-advances",
      },

      {
        name: "SBA Loans",
        color: "gray",
        released: false,
        pathName: "sba-loans",
      },

      {
        name: "Tax Overages",
        color: "gray",
        released: false,
        pathName: "tax-overages",
      },
    ],
  },
  {
    name: "E-Signatures",
    modules: [],
  },
]);

const handlePillClick = (pill) => {
  chosenPill.value = pill;
};
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
        <div class="p-2 bg-gray-200 rounded-full">
          <div class="flex flex-row justify-center gap-4">
            <button
              @click="handlePillClick('crm')"
              :class="`${
                chosenPill === 'crm'
                  ? 'bg-indigo-500 hover:bg-indigo-700 text-white'
                  : 'bg-gray-50 text-gray-600 hover:text-white hover:bg-indigo-700'
              } btn border-none rounded-full px-4 py-2 shadow-md`"
              class="btn border-none bg-gray-50 rounded-full px-4 py-2 shadow-md"
            >
              CRM
            </button>
            <button
              @click="handlePillClick('esign')"
              :class="`${
                chosenPill === 'esign'
                  ? 'bg-indigo-500 hover:bg-indigo-700 text-white'
                  : 'bg-gray-50 text-gray-600 hover:text-white hover:bg-indigo-700'
              } btn border-none rounded-full px-4 py-2 shadow-md`"
              class="btn border-none bg-gray-50 rounded-full px-4 py-2 shadow-md"
            >
              E-Signatures
            </button>
            <button
              @click="handlePillClick('integrations')"
              :class="`${
                chosenPill === 'integrations'
                  ? 'bg-indigo-500 hover:bg-indigo-700 text-white'
                  : 'bg-gray-50 text-gray-600 hover:text-white hover:bg-indigo-700'
              } btn border-none rounded-full px-4 py-2 shadow-md`"
              class="btn border-none bg-gray-50 rounded-full px-4 py-2 shadow-md"
            >
              Integrations
            </button>
          </div>
        </div>

        <div
          v-if="chosenPill === 'crm'"
          class="bg-gray-200 rounded-full max-w-full"
        >
          <div class="flex flex-row gap-4 overflow-x-auto rounded-full p-2">
            <router-link
              v-for="(item, i) in pillMenu[0].modules"
              :key="i"
              :to="{ name: item.pathName }"
              :class="`bg-${item.color}-500 hover:bg-${item.color}-700`"
              class="relative btn border-none text-white rounded-full px-4 py-2 shadow-md"
            >
              {{ item.name }}

              <span
                v-if="!item.released"
                class="absolute -bottom-2 right-0 bg-rose-500 py-1 px-2 rounded-full text-xs"
              >
                Coming Soon
              </span>
            </router-link>
          </div>
        </div>

        <!-- vue sub router to products route -->
        <router-view />
      </div>
    </div>
  </div>
</template>
