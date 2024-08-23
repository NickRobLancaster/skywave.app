<script setup>
import { ref } from "vue";

import { useWebsiteStore } from "../../stores/websiteStore";

const websiteStore = useWebsiteStore();

const modules = ref([
  {
    name: "Client Relationship Manager",
    released: true,
    componentName: "crm",
    compliance_mode: false,
  },

  {
    name: "Debt Settlement Calculator",
    released: true,
    componentName: "debt-settlement",
    compliance_mode: true,
  },
  {
    name: "Credit Repair Dispute System",
    released: true,
    componentName: "credit-repair",
    compliance_mode: true,
  },

  {
    name: "Student Loan Qualification",
    released: true,
    componentName: "student-loan",
    compliance_mode: true,
  },
  {
    name: "Tax Resolution",
    released: false,
    componentName: "tax-resolution",
    compliance_mode: true,
  },
  {
    name: "MCA Management",
    released: false,
    componentName: "merchant-cash-advances",
    compliance_mode: true,
  },

  {
    name: "SBA Loans",
    released: false,
    componentName: "sba-loans",
    compliance_mode: true,
  },

  {
    name: "Tax Overages",
    released: false,
    componentName: "tax-overages",
    compliance_mode: true,
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
          v-for="(item, i) in modules"
          :key="i"
          v-show="
            (item.compliance_mode && !websiteStore.compliance_mode) ||
            !item.compliance_mode
          "
          :to="{ name: item.componentName }"
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
