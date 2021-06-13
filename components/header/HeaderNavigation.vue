<template>
  <nav
    class="sm:mb-8 max-w-lg mx-0.5 sm:mx-auto flex relative -top-10 sm:-top-14 justify-evenly items-center font-bold transform-gpu -rotate-6"
  >
    <nuxtLink
      to="/services"
      class="transform-gpu -skew-x-12 py-1 px-2 bg-blue-500 hover:bg-blue-600 transform-gpu hover:ring-4 ring-blue-600 shadow-lg ring-opacity-40 transition-all"
    >
      services
    </nuxtLink>
    <nuxtLink
      to="/portfolio"
      class="transform-gpu -skew-x-12 py-1 px-2 bg-blue-500 hover:bg-blue-600 transform-gpu hover:ring-4 ring-blue-600 shadow-lg ring-opacity-40 transition-all"
    >
      portfolio
    </nuxtLink>
    <nuxtLink
      to="/contact"
      class="transform-gpu -skew-x-12 py-1 px-2 bg-blue-500 hover:bg-blue-600 transform-gpu hover:ring-4 ring-blue-600 shadow-lg ring-opacity-40 transition-all"
    >
      contact
    </nuxtLink>
    <HeaderLogo />
  </nav>
</template>
