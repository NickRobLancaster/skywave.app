<template>
  <div :class="{ fullscreen: isFullscreen }" @click="toggleFullscreen">
    <img
      :src="src"
      :style="{ width: imageWidth }"
      :class="['image-preview', { fullscreen: isFullscreen }]"
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
    default: "100%", // Default width if not provided
  },
});

// Local variable to toggle fullscreen
const isFullscreen = ref(false);

// Computed property for image width
const imageWidth = computed(() => (isFullscreen.value ? "100%" : props.width));

// Method to toggle fullscreen mode
const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value;
};
</script>

<style scoped>
.image-preview {
  transition: all 0.3s ease;
  cursor: pointer;
}

.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.fullscreen img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
