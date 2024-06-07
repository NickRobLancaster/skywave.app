<script setup>
import { ref } from "vue";

const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

window.addEventListener("scroll", handleScroll);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <transition
    enter-active-class="transition-opacity duration-500 ease-in-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-500 ease-in-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <button
      v-show="scrollY > 100"
      @click="scrollToTop"
      class="bg-gray-50 px-2 py-1 rounded text-gray-400"
    >
      <font-awesome-icon :icon="['fas', 'chevron-up']" />
    </button>
  </transition>
</template>
