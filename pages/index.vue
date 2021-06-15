<template>
  <div class="flow-root bg-indigo-100 text-gray-800 dark:bg-elegiac dark:text-gray-200 halos">
    <Header />
    <MainAtYourService />
    <MainRecommended />
    <MainQuoteNow />
    <MainShortAboutMe />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.halos {
  background:
    radial-gradient(20% 7% at 0% 12%, #7644B6 0%, rgba(255, 255, 255, 0) 100%),
    radial-gradient(180px 160px at 310px 350px, hsla(194.5, 76.1%, 54.1%, 0.7) 0%, rgba(255, 255, 255, 0) 100%),
    radial-gradient(31.5% 10% at 350px 160px, hsla(223, 36%, 60%, 1) 0%, rgba(86, 97, 123, 0.4) 51.04%, rgba(0, 0, 0, 0) 100%),
    radial-gradient(31.62% 10% at 5% 3%,rgba(85, 231, 196, 0.75) 0%, rgba(255, 255, 255, 0) 100%),
    radial-gradient(95% 28% at 105% -3%, #1D437C 0%, rgba(23, 66, 130, 0) 100%),
    #39577F;
}

/*
.halos {
  background:
    radial-gradient(circle at 50px 60%, hsla(266, 46%, 49%, 0.5), hsla(0, 0%, 0%, 0) 25%),
    radial-gradient(circle at 70px 70px, hsla(166, 75%, 62%, 0.5), hsla(0, 0%, 0%, 0) 45%),
}
*/
</style>
