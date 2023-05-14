<script setup>
const colorMode = useColorMode()
</script>

<template>
  <header class="relative halos-light-homepage dark:halos-dark-homepage pb-16 lg:pb-0 transition duration-500">
    <div class="max-w-screen-2xl mx-auto lg:flex lg:pb-10 lg:pt-24">
      <div class="lg:mb-0 xl:mt-8 relative max-w-xl mx-auto px-5 lg:flex flex-col">
        <HeaderTagline />
        <HeaderCallToAction />
      </div>
    </div>
  </header>
</template>
