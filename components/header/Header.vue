<template>
  <header class="relative transition duration-500">
    <div>
      <HeaderNavigation />
      <div class="lg:mb-0 xl:mt-8 relative lg:flex mx-5 flex-col">
        <div class="mb-6 sm:mb-14 max-w-5xl mx-auto">
          <h1 class="text-4xl sm:text-5xl font-thin leading-relaxed tracking-wide" v-html="title"></h1>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Vue from 'vue'
import Moon from "~/assets/img/moon.svg?inline";
import Sun from "~/assets/img/sun.svg?inline";

export default Vue.extend({
  components: { Moon, Sun },
  props: ['title']
})
</script>
