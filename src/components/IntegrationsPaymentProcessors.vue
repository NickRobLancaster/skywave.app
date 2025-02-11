<script setup>
import { ref } from "vue";
import { useWebsiteStore } from "../../stores/websiteStore";

const websiteStore = useWebsiteStore();

const paymentProcessors = ref([
  {
    name: "Authorize.net",
    src: "/images/auth_net.png",
    description: "Credit Card / E-Check",
  },
  {
    name: "NMI (Credit Card / E-Check)",
    src: "/images/nmi.png",
    description: "Credit Card / E-Check",
  },
  {
    name: "UnityFi Solutions",
    src: "/images/unity_fi.png",
  },
  {
    name: "USAePAY",
    src: "/images/usa_epay.png",
  },
  {
    name: "Payment Automation Network",
    src: "/images/pan.png",
  },
  {
    name: "Stripe",
    src: "/images/stripe.png",
  },
  {
    name: "PayPal",
    src: "/images/pay_pal.png",
  },
  {
    name: "EPS",
    src: "/images/eps.png",
  },
  {
    name: "Seamless Chex",
    src: "/images/seamless_checks.svg",
  },
  {
    name: "MojoPay",
    src: "/images/mojo_pay.png",
  },
  {
    name: "eDebitDirect",
    src: "/images/edebit_direct.png",
  },
  {
    name: "Green By Phone",
    src: "/images/green_by_phone.webp",
  },
  {
    name: "Group ISO",
    src: "/images/group_iso_merchant.png",
  },
  {
    name: "Profituity",
    src: "/images/profituity.png",
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
