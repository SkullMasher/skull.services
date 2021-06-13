<template>
  <nav
    class="max-w-xl mx-0.5 sm:mx-auto flex relative -top-11 sm:-top-20 justify-evenly items-center font-bold transform-gpu -rotate-6 sm:text-xl sm:tracking-widest"
  >
    <nuxtLink
      to="/services"
      class="-skew-x-12 py-1 px-2 bg-blue-500 hover:bg-blue-600 transform-gpu hover:ring-8 ring-blue-600 shadow-lg ring-opacity-40 transition-all"
    >
      services
    </nuxtLink>
    <nuxtLink
      to="/portfolio"
      class="-skew-x-12 py-1 px-2 bg-blue-500 hover:bg-blue-600 transform-gpu hover:ring-8 ring-blue-600 shadow-lg ring-opacity-40 transition-all"
    >
      portfolio
    </nuxtLink>
    <nuxtLink
      to="/contact"
      class="-skew-x-12 py-1 px-2 bg-blue-500 hover:bg-blue-600 transform-gpu hover:ring-8 ring-blue-600 shadow-lg ring-opacity-40 transition-all"
    >
      contact
    </nuxtLink>
    <HeaderLogo />
  </nav>
</template>
