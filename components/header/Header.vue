<script setup>
defineProps(['title'])
</script>

<template>
  <header class="relative mb-5 sm:mb-10 pt-4 pb-5 sm:pb-20 transition duration-500 halos-light dark:halos-dark">
    <HeaderNavigation />
    <slot />
  </header>
</template>
