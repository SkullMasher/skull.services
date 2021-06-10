<template>
  <div class="flow-root bg-gray-700">
    <Header />
    <p>
      <NuxtLink to="/poc">It's POC time !</NuxtLink>
    </p>
    <MainAtYourService />
    <MainRecommended />
    <MainQuoteNow />
    <MainShortAboutMe />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
