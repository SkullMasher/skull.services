<template>
  <nav
    class="mx-0.5 flex relative -top-10 justify-evenly items-center font-bold transform-gpu -rotate-6"
  >
    <nuxtLink
      to="/services"
      class="transform-gpu -skew-x-12 py-1 px-2 bg-blue-500 transform-gpu hover:ring-4 ring-blue-500 ring-opacity-30"
    >
      services
    </nuxtLink>
    <nuxtLink
      to="/portfolio"
      class="transform-gpu -skew-x-12 py-1 px-2 bg-blue-500 transform-gpu hover:ring-4 ring-blue-500 ring-opacity-30"
    >
      portfolio
    </nuxtLink>
    <nuxtLink
      to="/contact"
      class="transform-gpu -skew-x-12 py-1 px-2 bg-blue-500 transform-gpu hover:ring-4 ring-blue-500 ring-opacity-30"
    >
      contact
    </nuxtLink>
    <HeaderLogo />
  </nav>
</template>
