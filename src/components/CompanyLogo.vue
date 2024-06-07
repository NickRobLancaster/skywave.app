<script setup>
import { ref } from "vue";

import { useWebsiteStore } from "../../stores/websiteStore";

const websiteStore = useWebsiteStore();

//props to set the width of the image
const props = defineProps({
  width: {
    type: String,
    default: "5",
  },
});

//get and set the width of the image
const width = ref(props.width);
</script>

<template>
  <div class="flex items-center gap-2">
    <img
      src="https://skywave.app/wp-content/uploads/2020/06/skywave-transparent-small-1.png"
      alt="Skywave CRM Company Logo"
      :class="`w-${width}`"
    />
  </div>
</template>
