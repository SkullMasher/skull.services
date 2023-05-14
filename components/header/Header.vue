<script setup>
defineProps(['title'])
</script>

<template>
  <header class="relative mb-5 sm:mb-10 pt-4 pb-5 sm:pb-20 transition duration-500 halos-light dark:halos-dark">
    <div>
      <HeaderNavigation />
      <div class="lg:mb-0 xl:mt-8 relative lg:flex mx-5 flex-col">
        <div class="max-w-5xl mx-auto">
          <h1 class="text-4xl sm:text-5xl font-thin leading-relaxed tracking-wide" v-html="title" />
        </div>
      </div>
    </div>
  </header>
</template>
