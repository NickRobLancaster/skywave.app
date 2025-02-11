<script setup>
import { ref } from "vue";
import { submitForm as FormKitSubmit } from "@formkit/vue";
import axios from "axios";
import { useWebsiteStore } from "../../stores/websiteStore";

const websiteStore = useWebsiteStore();

const submitNewsletterSubscriptionForm = () => {
  FormKitSubmit("newletter-subscription-form");
};

//axios post request
const subscribe = async () => {
  const response = await axios.post("https://skywave.free.beeceptor.com", {
    email: websiteStore.user.email,
  });

  console.log("DATA: ", response);

  if (response) {
    websiteStore.addToast({
      type: "success",
      title: "Subscribed!",
      message: "Subscribed successfully!",
    });
  } else {
    websiteStore.addToast({
      type: "error",
      title: "Failed to Subscribe",
      message: "Failed to subscribe. Please try again.",
    });
  }
};
</script>

<template>
  <div class="flex flex-col gap-5 bg-[#f3f3fe]">
    <div class="flex flex-col gap-5 items-center">
      <div class="flex flex-row items-center gap-5 pt-28">
        <iframe
          id="JotFormIFrame-242946442743058"
          title="Email Newsletter"
          onload="window.parent.scrollTo(0,0)"
          allowtransparency="true"
          allow="geolocation; microphone; camera; fullscreen"
          src="https://form.jotform.com/242946442743058"
          frameborder="0"
          style="min-width: 100%; max-width: 100%; height: 575px; border: none"
          scrolling="no"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>
