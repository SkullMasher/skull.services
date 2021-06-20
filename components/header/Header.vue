<template>
  <header class="relative halos-light dark:halos-dark">
    <button
      v-show="$colorMode.value === 'light'"
      @click="$colorMode.preference = 'dark'"
      class="absolute z-10 top-8 right-8 md:top-16 md:right-16 lg:top-10 lg:right-20 opacity-100 hover:opacity-100"
    >
      <nuxt-img
        class="w-10 inline-block cursor-pointer transform transition duration-500 hover:rotate-45 moon-shine"
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
        class="w-10 inline-block cursor-pointer transform transition duration-500 hover:rotate-180 sun-shine"
        format="svg"
        src="/img/sun.svg"
      />
    </button>
    <div class="max-w-screen-2xl mx-auto lg:flex lg:pb-10">
      <div>
        <HeaderHeroImage />
        <HeaderNavigation />
      </div>
      <div class="mb-24 lg:mb-0 relative z-10 max-w-xl mx-auto px-5 mb-20 lg:flex flex-col justify-center">
        <HeaderTagline />
        <HeaderCallToAction />
      </div>
    </div>
  </header>
</template>
<style>
/*
.halos {
  background:
    radial-gradient(circle at 50px 60%, hsla(266, 46%, 49%, 0.5), hsla(0, 0%, 0%, 0) 25%),
    radial-gradient(circle at 70px 70px, hsla(166, 75%, 62%, 0.5), hsla(0, 0%, 0%, 0) 45%),
    radial-gradient(circle at 280px 45%, hsla(194, 76%, 54%, 0.5), hsla(0, 0%, 0%, 0) 25%);
}
*/
</style>
