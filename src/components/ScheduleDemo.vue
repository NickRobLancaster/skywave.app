<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

//import vue router
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

import { useWebsiteStore } from "./../../stores/websiteStore";
const websiteStore = useWebsiteStore();
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
        v-if="websiteStore.showScheduleDemo"
        class="fixed h-screen w-screen z-50 cursor-pointer backdrop-brightness-50"
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
        @click.self="websiteStore.toggleClose('showScheduleDemo')"
        v-if="websiteStore.showScheduleDemo"
        class="fixed w-screen h-screen flex flex-col justify-center items-center z-60"
      >
        <div class="flex flex-col w-full md:w-1/2 overflow-y-auto rounded">
          <div class="relative flex flex-col bg-purple-200">
            <button
              @click="websiteStore.toggleClose('showScheduleDemo')"
              class="absolute bg-gray-200 hover:bg-gray-300 rounded-full top-5 right-5 ml-auto active:animate-press text-2xl px-3 py-1"
            >
              <font-awesome-icon :icon="['fas', 'times']" />
            </button>

            <iframe
              id="JotFormIFrame-241906082595058"
              title="Schedule Demo Form"
              onload="window.parent.scrollTo(0,0)"
              allowtransparency="true"
              allow="geolocation; microphone; camera; fullscreen"
              src="https://form.jotform.com/241906082595058"
              frameborder="0"
              style="
                min-width: 100%;
                max-width: 100%;
                height: 1265px;
                border: none;
              "
              scrolling="no"
            >
            </iframe>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
