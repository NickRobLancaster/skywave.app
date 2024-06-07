<script setup></script>

<template>
  <!-- FIXED UI ITEMS - BUTTONS / MODALS -->

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

  <router-view name="modals"></router-view>
  <router-view name="root" />

  <WebsiteFooter />
</template>
