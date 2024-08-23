<script setup>
import { ref } from "vue";

import { useWebsiteStore } from "../../stores/websiteStore";

const websiteStore = useWebsiteStore();
</script>

<template>
  <!-- HERO -->
  <div
    class="h-screen flex flex-col justify-center items-center gap-10 p-5 bg-gradient-to-b from-emerald-500 to-emerald-300 text-white"
  >
    <h1 class="text-5xl font-bold">Pricing</h1>
    <p class="text-2xl text-center">
      <!-- blurb about pricing -->
      Flexibility and Convenience for Your Budget
    </p>
  </div>

  <div class="bg-emerald-300 flex flex-row justify-center pb-44 px-5">
    <div
      class="rounded-xl bg-gray-50 p-4 md:px-8 md:pb-8 -mt-52 flex flex-row justify-center"
    >
      <div
        :class="`${
          websiteStore.compliance_mode
            ? 'grid grid-cols-1 md:grid-cols-1'
            : 'grid md:grid-cols-2'
        }`"
        class="gap-8"
      >
        <!-- BASE PLAN -->
        <div
          class="-mt-12 mb-1 rounded p-5 border border-slate-400 shadow-lg shadow-blue-400 bg-blue-400 glass"
        >
          <h3 class="text-3xl text-white p-4 text-center">Base</h3>

          <h4 class="text-white p-4 text-center mb-5">
            <span class="text-5xl"> $375 </span>
            <br />
            <span> / Month </span>
          </h4>

          <div class="flex flex-col text-gray-50 items-center">
            <div class="divide-y border border-gray-50 rounded-xl">
              <div class="grid grid-cols-2 divide-x">
                <div class="p-2 font-bold text-xs sm:text-md md:text-lg">
                  Feature
                </div>
                <div class="p-2 font-bold text-xs sm:text-md md:text-lg">
                  Cost
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x">
                <div class="p-2 text-xs sm:text-md md:text-base">
                  Users Included
                </div>
                <div class="p-2 text-xs sm:text-md md:text-base text-center">
                  5
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x">
                <div class="p-2 text-xs sm:text-md md:text-base">
                  Additional Users
                </div>
                <div class="p-2 text-xs sm:text-md md:text-base">
                  $75 / User / Month
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x">
                <div class="p-2 text-xs sm:text-md md:text-base">
                  Automations
                </div>
                <div class="p-2 text-xs sm:text-md md:text-base">
                  Free + Unlimited
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x">
                <div class="p-2 text-xs sm:text-md md:text-base">Email</div>
                <div class="p-2 text-xs sm:text-md md:text-base">
                  Free + Unlimited
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x">
                <div class="p-2 text-xs sm:text-md md:text-base">SMS</div>
                <div class="p-2 text-xs sm:text-md md:text-base">
                  Free + 0.0079 / SMS
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x">
                <div class="p-2 text-xs sm:text-md md:text-base">
                  Custom Development
                </div>
                <div class="p-2 text-xs sm:text-md md:text-base text-center">
                  <span class="py-1 bg-rose-400 text-gray-50 rounded-xl px-2">
                    <font-awesome-icon :icon="['fas', 'xmark']" />
                  </span>
                </div>
              </div>
            </div>

            <!-- get started -->
            <div class="p-2 mt-6">
              <a
                :href="websiteStore.onboarding_form"
                target="_blank"
                class="active:animate-press bg-blue-500 text-white rounded-full px-4 py-3 shadow-md"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        <!-- enterprise -->
        <div
          v-if="!websiteStore.compliance_mode"
          class="md:-mt-12 mb-1 rounded p-5 border border-slate-400 shadow-lg shadow-amber-400 bg-amber-400 glass"
        >
          <h3 class="text-3xl text-white p-4 text-center">Enterprise</h3>

          <h4 class="text-white p-4 text-center mb-5">
            <span class="text-5xl"> $2,999 </span>
            <br />
            <span> / Month </span>
          </h4>

          <div class="flex flex-col text-gray-50 items-center">
            <div class="divide-y border border-gray-50 rounded-xl">
              <div class="grid grid-cols-2 divide-x">
                <div class="p-2 font-bold text-xs sm:text-md md:text-base">
                  Feature
                </div>
                <div class="p-2 font-bold text-xs sm:text-md md:text-base">
                  Cost
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x">
                <div class="p-2 text-xs sm:text-md md:text-base">
                  Users Included
                </div>
                <div class="p-2 text-xs sm:text-md md:text-base text-center">
                  5
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x">
                <div class="p-2 text-xs sm:text-md md:text-base">
                  Additional Users
                </div>
                <div class="p-2 text-xs sm:text-md md:text-base">
                  $75 / User / Month
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x">
                <div class="p-2 text-xs sm:text-md md:text-base">
                  Automations
                </div>
                <div class="p-2 text-xs sm:text-md md:text-base">
                  Free + Unlimited
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x">
                <div class="p-2 text-xs sm:text-md md:text-base">Email</div>
                <div class="p-2 text-xs sm:text-md md:text-base">
                  Free + Unlimited
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x">
                <div class="p-2 text-xs sm:text-md md:text-base">SMS</div>
                <div class="p-2 text-xs sm:text-md md:text-base">
                  Free + 0.0079 / SMS
                </div>
              </div>
              <div class="grid grid-cols-2 divide-x">
                <div class="p-2 text-xs sm:text-md md:text-base">
                  Custom Development
                </div>
                <div class="p-2 text-xs sm:text-md md:text-base">Unlimited</div>
              </div>
            </div>

            <!-- get started -->
            <div class="p-2 mt-6">
              <a
                :href="websiteStore.onboarding_form"
                target="_blank"
                class="active:animate-press bg-amber-500 text-white rounded-full px-4 py-3 shadow-md"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
