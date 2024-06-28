<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

import { useWebsiteStore } from "../../stores/websiteStore";
import phoneFormat from "../../utils/phoneFormat";

import { copyText } from "../../utils/copyText";

const websiteStore = useWebsiteStore();

const isHovered = ref(false);

const setHovered = () => {
  isHovered.value = true;
};

const showCallDropdown = ref(false);

const handleLeave = () => {
  showCallDropdown.value = false;
  // isHovered.value = false;
};

const handleCopy = () => {
  copyText({
    type: "Phone Number",
    copiedItem: websiteStore.company.phone,
  });

  showCallDropdown.value = false;
};

const theTimeout = ref(null);

const openCallDropdown = async () => {
  showCallDropdown.value = true;

  //delay 5 seconds before checking if the mouse is hovered
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });

  if (isHovered.value) {
    clearTimeout(theTimeout.value);
  } else {
    theTimeout.value = setTimeout(() => {
      showCallDropdown.value = false;
    }, 1000);
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
      <div v-if="showCallDropdown" class="fixed h-screen w-screen"></div>
    </transition>
  </Teleport>

  <div class="relative">
    <button
      @click="openCallDropdown"
      class="active:animate-press bg-blue-500 text-white rounded-full px-4 py-3 shadow-md"
    >
      <font-awesome-icon :icon="['fas', 'phone']" />
    </button>

    <transition
      enter-active-class="transform transition ease-in-out duration-300"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transform transition ease-in-out duration-300"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="showCallDropdown"
        class="absolute max-md:-top-24 md:-bottom-24 bg-white rounded-xl border-gray-300 border flex flex-col p-1 gap-1"
        @mouseleave="handleLeave"
        @mouseenter="setHovered"
      >
        <div class="whitespace-nowrap flex flex-row gap-2 items-center">
          <span class="text-gray-500">{{
            phoneFormat(websiteStore.company.phone)
          }}</span>
          <button
            @click="handleCopy"
            class="btn btn-sm border-none text-gray-50 bg-gray-500"
          >
            <font-awesome-icon :icon="['fas', 'copy']" />
          </button>
        </div>
        <a
          :href="`tel:1+${websiteStore.company.phone}`"
          class="whitespace-nowrap bg-blue-500 border-none btn text-gray-50"
        >
          Call Now
        </a>
      </div>
    </transition>
  </div>
</template>
