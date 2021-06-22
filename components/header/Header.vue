<template>
  <header class="relative halos-light dark:halos-dark pb-24">
    <button
      v-show="$colorMode.value === 'light'"
      @click="$colorMode.preference = 'dark'"
      class="absolute z-10 top-8 right-8 md:top-16 md:right-16 lg:top-10 lg:right-20 opacity-100 hover:opacity-100"
    >
      <nuxt-img
        class="w-8 md:w-10 inline-block cursor-pointer transform transition duration-500 hover:rotate-45 moon-shine"
        format="svg"
        src="/img/moon.svg"
      />
    </button>
    <button
      v-show="$colorMode.value === 'dark'"
      @click="$colorMode.preference = 'light'"
      class="absolute z-10 top-8 right-8 md:top-16 md:right-16 lg:top-10 lg:right-20 opacity-100 hover:opacity-100"
    >
      <nuxt-img
        class="w-8 md:w-10 inline-block cursor-pointer transform transition duration-500 hover:rotate-180 sun-shine"
        format="svg"
        src="/img/sun.svg"
      />
    </button>
    <div class="max-w-screen-2xl mx-auto lg:flex lg:pb-10">
      <div>
        <HeaderHeroImage />
        <HeaderNavigation />
      </div>
      <div class="lg:mb-0 relative max-w-xl mx-auto px-5 lg:flex flex-col justify-center">
        <HeaderTagline />
        <HeaderCallToAction />
      </div>
    </div>
  </header>
</template>
