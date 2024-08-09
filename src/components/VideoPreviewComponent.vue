<script setup>
import { ref, defineProps } from "vue";
// Props definition
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
});

// Reference to the video element
const videoElement = ref(null);
</script>

<template>
  <!-- Video element with dynamic classes and properties -->
  <video
    ref="videoElement"
    :id="id"
    :class="classes"
    controls
    autoplay
    loop
    muted
  >
    <source :src="src" type="video/mp4" />
  </video>
</template>
