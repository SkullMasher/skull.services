<script setup>
defineProps(['title'])
</script>

<template>
  <div class="lg:mb-0 xl:mt-8 relative lg:flex mx-5 flex-col">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl sm:text-5xl font-thin leading-relaxed tracking-wide" v-html="title" />
    </div>
  </div>
</template>
