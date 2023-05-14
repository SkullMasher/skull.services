<script>
import '@unocss/reset/tailwind.css'
</script>

<template>
  <div class="flow-root bg-indigo-100 text-gray-800 dark:bg-elegiac dark:text-gray-200 transition duration-500">
    <NuxtPage />
  </div>
</template>

<style>
@font-face {
  font-family: 'Heebo';
  font-style: normal;
  font-display: swap;
  font-weight: 100 900;
  src: url(~/assets/fonts/heebo.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>
