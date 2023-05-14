<template>
  <nav
    class="nav-primary max-w-xl mx-2 sm:mx-auto mb-10 flex sm:flex-row-reverse justify-between items-center font-bold transform-gpu sm:text-lg sm:tracking-wider uppercase"
  >
    <ColorModeSwitch class="hidden sm:block" />
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
    <HeaderNavLogo />
  </nav>
</template>

<style>
  .nav-primary .nuxt-link-exact-active {
    @apply bg-blue-600 ring-8 ring-blue-600 ring-opacity-40 cursor-default;
  }
</style>
