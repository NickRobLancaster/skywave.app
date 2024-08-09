<script setup>
import { ref } from "vue";
import { useWebsiteStore } from "../../stores/websiteStore";

const websiteStore = useWebsiteStore();

const paymentProcessors = ref([
  {
    name: "Authorize.net",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/16/Authorize.net_logo.png",
    description: "Credit Card / E-Check",
  },
  {
    name: "NMI (Credit Card / E-Check)",
    src: "https://i.ibb.co/m9ZYZG9/Screenshot-2024-08-09-at-4-13-03-PM.png",
    description: "Credit Card / E-Check",
  },
  {
    name: "UnityFi Solutions",
    src: "https://unityfisolutions.com/files/Unity-Fi-Logo-_-Larger-Transparent_Logo-Two-Line-Color-1-1100x279.png",
  },
  {
    name: "USAePAY",
    src: "https://i.ibb.co/4j7yJwH/Screenshot-2024-08-09-at-4-14-59-PM.png",
  },
  {
    name: "Payment Automation Network",
    src: "https://static.wixstatic.com/media/eb1dd9_cf28b2f3a1a041a5a52a13d9592f110d~mv2.png/v1/fill/w_251,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/NEW%20LOGOS.png",
  },
  {
    name: "Stripe",
    src: "https://www.stripe.com/img/v3/home/social.png",
  },
  {
    name: "PayPal",
    src: "https://www.edigitalagency.com.au/wp-content/uploads/new-PayPal-Logo-horizontal-full-color-png.png",
  },
  {
    name: "EPS",
    src: "https://eps-na.com/wp-content/uploads/sites/16/2024/03/logo.png",
  },
  {
    name: "Seamless Chex",
    src: "https://cdn.prod.website-files.com/629f4f1071598e2325b33b7f/6532596aeebb4df7798021ad_Group%2068.svg",
  },
  {
    name: "MojoPay",
    src: "https://i.ibb.co/tXRsbxz/Screenshot-2024-08-09-at-4-29-59-PM.png",
  },
  {
    name: "eDebitDirect",
    src: "https://support.forthcrm.com/hc/article_attachments/22616035108755",
  },
  {
    name: "Green By Phone",
    src: "https://i.ibb.co/Sv0dKvr/Screenshot-2024-08-09-at-4-01-38-PM.png",
  },
  {
    name: "Group ISO",
    src: "https://www.groupiso.com/wp-content/uploads/2021/12/groupisohlogo.png",
  },
  {
    name: "Profituity",
    src: "https://profituity.com/wp-content/uploads/2020/02/profituity-logo-223.png",
  },
]);
</script>

<template>
  <div class="self-stretch p-2">
    <div class="rounded-xl border border-gray-300 overflow-clip">
      <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
        <!-- BASE PLAN -->
        <div
          v-for="(payProcessor, i) in paymentProcessors"
          class="rounded-xl p-5 border border-slate-400 shadow-lg glass bg-gray-50 h-52 flex flex-col justify-center items-center"
        >
          <img :src="payProcessor.src" />

          <h3
            v-if="payProcessor?.description"
            class="mt-2 text-base text-gray-50 bg-emerald-400 p-2 rounded-full text-center"
          >
            {{ payProcessor.description }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
