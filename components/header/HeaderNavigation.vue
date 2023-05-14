<template>
  <nav
    class="nav-primary max-w-xl mx-2 sm:mx-auto mb-10 flex sm:flex-row-reverse justify-between items-center font-bold transform-gpu sm:text-xl sm:tracking-widest"
  >
    <button
      v-show="$colorMode.value === 'dark'"
      class=""
      @click="$colorMode.preference = 'light'"
    >
      <SvgoSun class="w-8 md:w-10 inline-block cursor-pointer transform transition duration-500 hover:rotate-180 sun-shine" />
    </button>
    <button
      v-show="$colorMode.value === 'light'"
      class=""
      @click="$colorMode.preference = 'dark'"
    >
      <SvgoMoon class="w-8 md:w-10 inline-block cursor-pointer transform transition duration-500 hover:rotate-45 moon-shine" />
    </button>
    <a
      href="#contact"
      class="-skew-x-12 py-1 px-2 bg-blue-500 hover:bg-blue-600 transform-gpu hover:ring-8 ring-blue-600 shadow-lg ring-opacity-40 transition-all text-gray-200"
    >
      contact
    </a>
    <nuxtLink
      to="/portfolio"
      class="-skew-x-12 py-1 px-2 bg-blue-500 hover:bg-blue-600 transform-gpu hover:ring-8 ring-blue-600 shadow-lg ring-opacity-40 transition-all text-gray-200"
    >
      portfolio
    </nuxtLink>
    <nuxtLink
      to="/services"
      class="-skew-x-12 py-1 px-2 bg-blue-500 hover:bg-blue-600 transform-gpu hover:ring-8 ring-blue-600 shadow-lg ring-opacity-40 transition-all text-gray-200"
    >
      services
    </nuxtLink>
    <HeaderLogo />
  </nav>
</template>

<style>
  .nav-primary .nuxt-link-exact-active {
    @apply bg-blue-600 ring-8 ring-blue-600 ring-opacity-40 cursor-default;
  }
</style>
