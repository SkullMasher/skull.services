<template>
  <nav
    class="max-w-xl mx-0.5 sm:mx-auto flex lg:flex-col relative -top-11 sm:-top-20 lg:-top-24 justify-evenly lg:items-end items-center font-bold transform-gpu -rotate-6 sm:text-xl sm:tracking-widest relative"
  >
    <nuxtLink
      to="/services"
      class="-skew-x-12 py-1 px-2 bg-blue-500 hover:bg-blue-600 transform-gpu hover:ring-8 ring-blue-600 shadow-lg ring-opacity-40 transition-all text-gray-200 lg:hidden top-4 right-24"
    >
      services
    </nuxtLink>
    <nuxtLink
      to="/portfolio"
      class="-skew-x-12 py-1 px-2 bg-blue-500 hover:bg-blue-600 transform-gpu hover:ring-8 ring-blue-600 shadow-lg ring-opacity-40 transition-all text-gray-200 lg:hidden top-20 right-24"
    >
      portfolio
    </nuxtLink>
    <a
      href="#contact"
      class="-skew-x-12 py-1 px-2 bg-blue-500 hover:bg-blue-600 transform-gpu hover:ring-8 ring-blue-600 shadow-lg ring-opacity-40 transition-all text-gray-200 lg:hidden"
    >
      contact
    </a>
    <HeaderLogo />
  </nav>
</template>
