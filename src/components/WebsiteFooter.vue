<script setup>
import { ref } from "vue";
import { useWebsiteStore } from "../../stores/websiteStore";
import phoneFormat from "../../utils/phoneFormat";

const websiteStore = useWebsiteStore();
</script>

<template>
  <footer class="bg-gray-800 text-white flex flex-col items-between">
    <div class="flex flex-col lg:grid md:grid-cols-5 bg-gray-600 p-5 gap-5">
      <div class="flex flex-col gap-4 lg:items-center">
        <img
          src="https://skywave.app/wp-content/uploads/2020/06/skywave-transparent-small-1.png"
          alt="Skywave Company Logo"
          class="w-40 border border-slate-400 rounded p-1 bg-gray-50"
        />

        <ul class="flex flex-col gap-2 list-disc list-inside">
          <li class="text-gray-200 hover:text-gray-400 cursor-pointer">
            <router-link
              @click="websiteStore.instantTop"
              to="/terms-of-service"
              class="text-gray-200 hover:text-gray-400 cursor-pointer"
            >
              Terms of Service
            </router-link>
          </li>

          <li class="text-gray-200 hover:text-gray-400 cursor-pointer">
            <router-link
              @click="websiteStore.instantTop"
              to="/privacy-policy"
              class="text-gray-200 hover:text-gray-400 cursor-pointer"
            >
              Privacy Policy
            </router-link>
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-4 lg:items-center">
        <div class="flex flex-col gap-4">
          <h3 class="text-xl font-bold">Industry Tools</h3>
          <ul class="flex flex-col gap-2 list-disc list-inside">
            <li class="text-gray-200 hover:text-gray-400 cursor-pointer">
              Debt Settlement Calculator
            </li>
            <li class="text-gray-200 hover:text-gray-400 cursor-pointer">
              Credit Repair Dispute System
            </li>
            <li class="text-gray-200 hover:text-gray-400 cursor-pointer">
              Merchant Cash Advance
            </li>
            <li class="text-gray-200 hover:text-gray-400 cursor-pointer">
              SBA Loans
            </li>
            <li class="text-gray-200 hover:text-gray-400 cursor-pointer">
              Student Loan Qualification
            </li>
            <li class="text-gray-200 hover:text-gray-400 cursor-pointer">
              Tax Overages / Settlements
            </li>
            <li class="text-gray-200 hover:text-gray-400 cursor-pointer">
              Tax Resolution
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col gap-4 lg:items-center">
        <div class="flex flex-col gap-4">
          <h3 class="text-xl font-bold">Resources</h3>
          <ul class="flex flex-col gap-2 list-disc list-inside">
            <li class="text-gray-200 hover:text-gray-400 cursor-pointer">
              API Docs
            </li>
            <li class="text-gray-200 hover:text-gray-400 cursor-pointer">
              Change Log
            </li>
            <li class="text-gray-200 hover:text-gray-400 cursor-pointer">
              Uptime Status
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col gap-4 lg:items-center">
        <div class="flex flex-col gap-4">
          <h3 class="text-xl font-bold">Core Features</h3>
          <ul class="flex flex-col gap-2 list-disc list-inside">
            <li class="text-gray-200 hover:text-gray-400 cursor-pointer">
              Contact Management System
            </li>
            <li class="text-gray-200 hover:text-gray-400 cursor-pointer">
              Livesigner E-Signature
            </li>
            <li class="text-gray-200 hover:text-gray-400 cursor-pointer">
              Inbound / Outbound Email System
            </li>
            <li class="text-gray-200 hover:text-gray-400 cursor-pointer">
              SMS Infra - Inbound / Outbound
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col gap-4 lg:items-center">
        <div class="flex flex-col gap-4">
          <h3 class="text-xl font-bold text-left">Contact Us</h3>
          <ul class="flex flex-col gap-2">
            <li class="text-gray-200 text-sm md:text-base">
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Datacore+CRM/@33.9470667,-117.4009004,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcb15fe6a4b84f:0x976dd481cf9be3a!8m2!3d33.9470667!4d-117.3983255!16s%2Fg%2F11fsqkmnn9?entry=ttu"
              >
                <div class="flex flex-row">
                  <span class="mr-3 text-green-300">
                    <font-awesome-icon :icon="['fas', 'location-pin']" />
                  </span>
                  <span class="hover:text-green-200 cursor-pointer">
                    {{ websiteStore.company.address.building }}<br />
                    {{ websiteStore.company.address.street }}<br />
                    {{ websiteStore.company.address.street2 }}<br />
                    {{ websiteStore.company.address.city }},
                    {{ websiteStore.company.address.state }}
                    {{ websiteStore.company.address.zip }}
                  </span>
                </div>
              </a>
            </li>

            <li class="text-gray-200 text-sm md:text-base">
              <a :href="`tel:+${websiteStore.company.phone}`">
                <span class="mr-2 text-blue-300">
                  <font-awesome-icon :icon="['fas', 'phone']" />
                </span>
                <span class="hover:text-blue-200 cursor-pointer">
                  {{ phoneFormat(websiteStore.company.phone) }}
                </span>
              </a>
            </li>

            <li class="text-gray-200 text-sm md:text-base">
              <a :href="`mailto:${websiteStore.company.email}`">
                <span class="mr-2 text-red-300">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                </span>
                <span class="hover:text-red-200 cursor-pointer">
                  {{ websiteStore.company.email }}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="pb-5 bg-gray-600 flex flex-row gap-8 justify-center text-xl">
      <a
        :href="websiteStore.company.social.facebook"
        target="_blank"
        class="cursor-pointer hover:text-gray-300"
      >
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </a>

      <a
        :href="websiteStore.company.social.linkedin"
        target="_blank"
        class="cursor-pointer hover:text-gray-300"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>

      <a
        :href="websiteStore.company.social.instagram"
        target="_blank"
        class="cursor-pointer hover:text-gray-300"
      >
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>

      <a
        :href="websiteStore.company.social.twitter"
        target="_blank"
        class="cursor-pointer hover:text-gray-300"
      >
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>

      <!-- <a
        :href="websiteStore.company.social.tiktok"
        target="_blank"
        class="cursor-pointer hover:text-gray-300"
      >
        <font-awesome-icon :icon="['fab', 'tiktok']" />
      </a> -->
    </div>

    <div
      class="bg-gray-700 p-2 flex flex-row items-center justify-center max-md:mb-16"
    >
      <p>© 2016 Skywave CRM</p>
    </div>
  </footer>
</template>
