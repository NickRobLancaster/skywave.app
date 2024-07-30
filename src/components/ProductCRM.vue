<script setup>
import { ref } from "vue";

const modules = ref([
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
]);
</script>

<template>
  <div
    class="flex flex-col md:flex-row w-full rounded-t-xl md:rounded-xl overflow-clip"
  >
    <div class="bg-gray-200 max-w-full flex flex-row md:h-full">
      <div class="flex flex-row md:flex-col gap-4 p-2 overflow-x-auto">
        <router-link
          v-for="(item, i) in modules"
          :key="i"
          :to="{ name: item.pathName }"
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

    <div class="flex-1 h-full bg-gray-50">
      <router-view />
    </div>
  </div>
</template>
