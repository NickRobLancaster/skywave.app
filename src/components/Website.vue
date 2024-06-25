<script setup></script>

<template>
  <ToastNotification />

  <div class="fixed bottom-2 left-2">
    <BackToTop />
  </div>

  <div class="fixed bottom-2 right-2">
    <SupportChat />
  </div>

  <div class="absolute top-0 left-0 w-full z-10">
    <CloudAnimation />
  </div>

  <Navbar />

  <!-- WEBSITE PAGES ROUTER LINK -->

  <router-view name="modals" />
  <router-view name="root" />

  <NewsletterSubscribe />
  <WebsiteFooter />
</template>
