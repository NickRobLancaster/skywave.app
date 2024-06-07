<script setup></script>

<template>
  <!-- NAV -->
  <div
    class="flex flex-row items-center px-2 fixed top-0 w-full bg-white z-20 gap-3"
  >
    <!-- COMPANY LOGO -->
    <img
      src="https://skywave.app/wp-content/uploads/2020/06/skywave-transparent-small-1.png"
      alt="Skywave Company Logo"
      class="w-52 py-3"
    />

    <div class="max-md:hidden ml-auto">
      <Navigation />
    </div>

    <div class="max-lg:fixed bottom-2 right-2">
      <CallToActionBar />
    </div>

    <HamburgerMenu />
  </div>
</template>
