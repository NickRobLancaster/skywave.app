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
  <div class="flex flex-col gap-5 bg-gray-50">
    <div
      class="flex flex-col gap-5 py-24 items-center justify-center backdrop-brightness-15 backdrop-blur-sm shadow-lg px-10"
    >
      <h1 class="text-4xl text-gray-500">Email Newsletter</h1>

      <p class="text-gray-500 text-center">
        Get Skywave News, Deals, and Updates Delivered to Your Inbox
      </p>

      <div class="flex flex-col gap-5">
        <FormKit
          type="form"
          id="newletter-subscription-form"
          :incomplete-message="false"
          form-class="text-white h-full flex flex-col justify-between"
          @submit="subscribe"
          outer-class="m-0"
          :actions="false"
          :submit-attrs="{
            'data-theme': `light`,
            ignore: true,
          }"
        >
          <FormKit
            type="email"
            :validation="[['required'], ['email']]"
            :validation-messages="{
              required: 'Email is required to subscribe',
              email: 'Please enter a valid email address',
            }"
            messages-class="bg-red-400 text-white rounded-full py-1 px-2 text-xs mt-1 text-center"
            validation-visibility="blur"
            input-class="$reset input bg-white text-gray-600 border border-gray-300 rounded p-4"
            inner-class="w-full max-w-full"
            outer-class="w-full max-w-full"
            v-model="websiteStore.user.email"
          />
        </FormKit>
        <button
          @click="submitNewsletterSubscriptionForm"
          type="submit"
          class="bg-gray-500 text-white btn border-none rounded-full"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>
