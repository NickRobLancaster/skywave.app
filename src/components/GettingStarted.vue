<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

//import vue router
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

import { useWebsiteStore } from "./../../stores/websiteStore";
const websiteStore = useWebsiteStore();

onMounted(() => {
  const websiteStore = useWebsiteStore();
  websiteStore.toggleOpen("showGetStarted");
});

const routeBack = () => {
  websiteStore.toggleClose("showGetStarted");
  //if vue-router history length is greater than 1 then go back
  if (websiteStore.routeHistory.length > 1) {
    router.go(-1);
  } else {
    //else push to home
    router.push("/home");
  }
};
</script>

<template>
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
        @click="routeBack"
        v-if="websiteStore.showGetStarted"
        class="fixed h-screen w-screen z-50 cursor-pointer"
      ></div>
    </transition>

    <transition
      enter-active-class="transition-transform duration-500 ease-in-out"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-500 ease-in-out"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <div
        @click.self="routeBack"
        v-if="websiteStore.showGetStarted"
        class="fixed w-screen h-screen flex flex-col justify-center items-center z-60"
      >
        <div class="bg-gray-100 w-full h-full lg:h-5/6 lg:w-5/6 flex flex-col">
          <button
            @click="routeBack"
            class="ml-auto active:animate-press text-2xl px-3 py-1 rounded"
          >
            <font-awesome-icon :icon="['fas', 'times']" />
          </button>
          <div class="flex flex-col items-center p-5">
            <h1 class="text-3xl font-bold">Get Started With</h1>
            <CompanyLogo width="64" />
          </div>
          <div>
            <!-- form -->
            <div>
              <div class="flex flex-col gap-3 p-5">
                <form class="flex flex-col gap-5">
                  <input
                    type="text"
                    placeholder="First Name"
                    class="w-full p-3 text-gray- bg-white border border-gray-300 rounded"
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    class="w-full p-3 text-gray- bg-white border border-gray-300 rounded"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    class="w-full p-3 text-gray- bg-white border border-gray-300 rounded"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    class="w-full p-3 text-gray- bg-white border border-gray-300 rounded"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    class="w-full p-3 text-gray- bg-white border border-gray-300 rounded"
                  />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    class="w-full p-3 text-gray- bg-white border border-gray-300 rounded"
                  />

                  <div class="flex flex-row">
                    <button type="button" class="sw-btn bg-gray-500">
                      Last
                    </button>
                    <button type="button" class="sw-btn bg-blue-500 ml-auto">
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
