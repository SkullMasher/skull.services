<template>
  <header class="relative mb-5 sm:mb-10 pt-4 pb-5 sm:pb-20 transition duration-500 halos-light dark:halos-dark">
    <div>
      <HeaderNavigation />
      <div class="lg:mb-0 xl:mt-8 relative lg:flex mx-5 flex-col">
        <div class="max-w-5xl mx-auto">
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
