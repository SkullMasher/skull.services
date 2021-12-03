<template>
  <div class="flow-root bg-indigo-100 text-gray-800 dark:bg-elegiac dark:text-gray-200 transition duration-500">
    <HeaderHomepage />
    <main>
      <MainAtYourService />
      <MainRecommended />
      <MainShortAboutMe />
      <section class="pt-20 pb-20 text-lg bg-indigo-200 dark:bg-elegiac-dark clippath-contactbloc">
        <div class="max-w-xl mx-auto">
          <h2 class="mb-10 mx-5 text-3xl">
            Demander un devis gratuit !
          </h2>
          <MainQuoteNow />
          <div class="max-w-sm mx-3 sm:mx-auto">
            <NuxtLink
              to="/services"
              class="btn--outline"
            >
              Me contacter <ArrowRight class="w-6 h-6 inline" />
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
