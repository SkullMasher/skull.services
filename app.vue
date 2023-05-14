<script>
import '@unocss/reset/tailwind-compat.css'
</script>

<template>
  <div class="flow-root bg-indigo-100 text-gray-800 dark:bg-elegiac dark:text-gray-200 transition duration-500 halos">
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

.link-pretty {
  @apply relative z-0 inline-block overflow-hidden align-bottom;
  transition: color .015s ease;
}

.link-pretty::before {
  @apply absolute top-0 w-full h-full;
  content: "";
  z-index: -1;
  transform: translateY(calc(100% - 2px));
  background-image: linear-gradient(60deg,theme('colors.blue.500'),theme('colors.blue.600'));
  transition: transform .15s ease;
}

.link-pretty:hover::before {
  transform: translateY(0);
  transition: transform .15s ease;
}

.halos {
  background:
    radial-gradient(30% 30% at 0% 10%, hsla(266.3, 45.6%, 65%, 0.3) 0%, rgba(255, 255, 255, 0) 100%),
    radial-gradient(100% 100% at 100% 0%, hsl(234.5, 89.5%, 73.9%, 0.2) 0%, rgba(23, 66, 130, 0) 100%),
    radial-gradient(60% 30% at 70% 15%, hsla(223, 36%, 80%, 0.3) 0%, hsla(222.2, 60%, 75%, 0.3) 51.04%, rgba(0, 0, 0, 0) 100%),
    radial-gradient(50% 70% at 50% 50%, hsla(180, 50%, 50%, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
    radial-gradient(50% 50% at 10% 50%,hsla(30, 60%, 60%, 0.3) 0%, rgba(255, 255, 255, 0) 100%),
    theme('colors.indigo.100');
}
</style>
