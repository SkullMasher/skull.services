<template>
  <nuxtLink
    to="/"
    class="p-1 bg-gray-100 rounded-full transform transform-gpu rotate-12 hover:-rotate-12 hover:scale-105 hover:ring-4 ring-gray-200 ring-opacity-30 transition-all shadow-lg relative"
  >
    <logo class="w-10 h-10 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
  </nuxtLink>
</template>

<script>
import Vue from 'vue'
import Logo from "~/assets/skullmasher.svg?inline";

export default Vue.extend({
  components: { Logo }
})
</script>
