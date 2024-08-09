<template>
  <!-- Container div with conditional fullscreen class -->
  <div
    :class="[
      isFullscreen
        ? 'fixed inset-0 bg-white flex justify-center items-center z-[1000]'
        : '',
      'cursor-pointer',
    ]"
    @click="toggleFullscreen"
  >
    <!-- Image element with dynamic width and transition effects -->
    <img
      :src="src"
      :class="[
        'transition-all duration-300 ease-in-out',
        isFullscreen ? 'max-w-full max-h-full object-contain' : imageWidth,
      ]"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Props
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: "w-full", // Default width if not provided, using Tailwind class
  },
});

// Local variable to toggle fullscreen
const isFullscreen = ref(false);

// Computed property for image width
const imageWidth = computed(() => (isFullscreen.value ? "" : props.width));

// Method to toggle fullscreen mode
const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value;
};
</script>
