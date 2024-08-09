// src/router.js
import { createRouter, createWebHistory, onBeforeRouteLeave } from "vue-router";

import Website from "./components/Website.vue";
import Home from "./components/Home.vue";
import Products from "./components/Products.vue";
import ProductCRM from "./components/ProductCRM.vue";
import ProductIntegrations from "./components/ProductIntegrations.vue";
//products
import ProductDebtSettlement from "./components/ProductDebtSettlement.vue";
import ProductCreditRepair from "./components/ProductCreditRepair.vue";
import ProductStudent from "./components/ProductStudent.vue";
import ProductTaxResolution from "./components/ProductTaxResolution.vue";
import ProductMCA from "./components/ProductMCA.vue";
import ProductSBA from "./components/ProductSBA.vue";
import ProductTaxOverages from "./components/ProductTaxOverages.vue";
//integrations
import IntegrationsPaymentProcessors from "./components/IntegrationsPaymentProcessors.vue";
import IntegrationsSMS from "./components/IntegrationsSMS.vue";
import IntegrationsEmailsSMTP from "./components/IntegrationsEmailsSMTP.vue";
import IntegrationsElectronicSignatures from "./components/IntegrationsElectronicSignatures.vue";
import IntegrationsWebhooks from "./components/IntegrationsWebhooks.vue";

import Features from "./components/Features.vue";
import Pricing from "./components/Pricing.vue";
import GettingStarted from "./components/GettingStarted.vue";
import TermsOfService from "./components/TermsOfService.vue";
import PrivacyPolicy from "./components/PrivacyPolicy.vue";

import EsignCoordinateGenerator from "./components/EsignCoordinateGenerator.vue";

import { useWebsiteStore } from "./../stores/websiteStore";

//comment for pushing to live
const routes = [
  {
    path: "/components",
    name: "components",
    redirect: { name: "esign-coordinates" },
    children: [
      {
        path: "esign-coordinates",
        name: "esign-coordinates",
        component: EsignCoordinateGenerator,
      },
    ],
  },
  {
    path: "/",
    name: "root",
    component: Website,
    redirect: { name: "home" },
    children: [
      {
        path: "home", // Path should be relative
        name: "home",
        components: { root: Home },
      },
      {
        path: "products", // Path should be relative
        name: "products",
        components: { root: Products },
        redirect: { name: "debt-settlement" },

        children: [
          {
            path: "crm",
            name: "crm",
            component: ProductCRM,
            redirect: { name: "debt-settlement" },

            children: [
              {
                path: "debt-settlement",
                name: "debt-settlement",
                component: ProductDebtSettlement,
              },
              //Credit Repair Dispute System
              {
                path: "credit-repair",
                name: "credit-repair",
                component: ProductCreditRepair,
              },

              {
                path: "student-loan",
                name: "student-loan",
                component: ProductStudent,
              },
              {
                path: "tax-resolution",
                name: "tax-resolution",
                component: ProductTaxResolution,
              },

              //merchant cash advance
              {
                path: "merchant-cash-advances",
                name: "merchant-cash-advances",
                component: ProductMCA,
              },

              //SBA Loans
              {
                path: "sba-loans",
                name: "sba-loans",
                component: ProductSBA,
              },
              {
                path: "tax-overages",
                name: "tax-overages",
                component: ProductTaxOverages,
              },
            ],
          },
          {
            path: "integrations",
            name: "integrations",
            component: ProductIntegrations,
            redirect: { name: "payment-processors" },
            children: [
              {
                path: "payment-processors",
                name: "payment-processors",
                component: IntegrationsPaymentProcessors,
              },
              {
                path: "sms",
                name: "sms",
                component: IntegrationsSMS,
              },
              {
                path: "emails-smtp",
                name: "emails-smtp",
                component: IntegrationsEmailsSMTP,
              },
              {
                path: "electronic-signatures",
                name: "electronic-signatures",
                component: IntegrationsElectronicSignatures,
              },
              {
                path: "webhooks",
                name: "webhooks",
                component: IntegrationsWebhooks,
              },
            ],
          },
        ],
      },
      {
        path: "features", // Path should be relative
        name: "features",
        components: { root: Features },
      },
      {
        path: "pricing", // Path should be relative
        name: "pricing",
        components: { root: Pricing }, // Fixed components declaration
      },
      {
        path: "get-started", // Path should be relative
        name: "get-started",
        components: { modals: GettingStarted }, // Fixed component declaration
      },
      {
        path: "terms-of-service", // Path should be relative
        name: "terms-of-service",
        components: { root: TermsOfService }, // Fixed component declaration
      },

      {
        path: "privacy-policy", // Path should be relative
        name: "privacy-policy",
        components: { root: PrivacyPolicy }, // Fixed component declaration
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const websiteStore = useWebsiteStore();
  websiteStore.addToHistory(from);

  console.log(websiteStore.routeHistory);

  next();
});

export default router;
