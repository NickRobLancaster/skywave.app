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
  <div
    class="flex flex-col gap-5 bg-[url('../../public/images/bg-newsletter-pattern.png')]"
  >
    <div
      class="flex flex-col gap-5 py-24 items-center justify-center backdrop-brightness-15 backdrop-blur-sm shadow-lg px-10"
    >
      <h1 class="text-4xl text-gray-50">Email Newsletter</h1>

      <p class="text-gray-200 text-center">
        Get the latest news, updates and offers delivered to your inbox
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
              required: 'Email is required',
              email: 'Please enter a valid email address',
            }"
            messages-class="text-red-500"
            validation-visibility="blur"
            placeholder="jim@dundermifflin.com"
            input-class="$reset input text-center bg-white text-gray-600"
            inner-class="w-full max-w-full"
            outer-class="w-full max-w-full"
            v-model="websiteStore.user.email"
          />
        </FormKit>
        <button
          @click="submitNewsletterSubscriptionForm"
          type="submit"
          class="bg-blue-500 text-white py-4 rounded-2xl"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>
