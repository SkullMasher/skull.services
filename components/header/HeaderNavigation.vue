<template>
  <nav
    class="nav-primary max-w-xl mx-2 sm:mx-auto mb-10 flex sm:flex-row-reverse justify-between items-center font-bold transform-gpu sm:text-xl sm:tracking-widest"
  >
    <button
      v-show="$colorMode.value === 'dark'"
      @click="$colorMode.preference = 'light'"
      class=""
    >
      <sun class="w-8 md:w-10 inline-block cursor-pointer transform transition duration-500 hover:rotate-180 sun-shine" />
    </button>
    <button
      v-show="$colorMode.value === 'light'"
      @click="$colorMode.preference = 'dark'"
      class=""
    >
      <moon class="w-8 md:w-10 inline-block cursor-pointer transform transition duration-500 hover:rotate-45 moon-shine" />
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

<script>
import Vue from 'vue'
import Moon from "~/assets/img/moon.svg?inline";
import Sun from "~/assets/img/sun.svg?inline";

export default Vue.extend({
  components: { Moon, Sun }
})
</script>

<style>
  .nav-primary .nuxt-link-exact-active {
    @apply bg-blue-600 ring-8 ring-blue-600 ring-opacity-40 cursor-default;
  }
</style>
