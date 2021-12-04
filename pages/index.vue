<template>
  <div class="flow-root bg-indigo-100 text-gray-800 dark:bg-elegiac dark:text-gray-200 transition duration-500">
    <HeaderHomepage />
    <main>
      <MainAtYourService />
      <MainRecommended />
      <MainShortAboutMe />
      <section id="contact" class="group pt-20 pb-20 text-lg bg-indigo-200 dark:bg-elegiac-dark clippath-contactbloc">
        <div class="mx-5">
          <div class="max-w-5xl mx-auto">
            <h2 class="mb-10 text-3xl">
              Demander un devis gratuit !
            </h2>
            <div class="lg:flex gap-12">
              <MainQuoteNow />
              <MainContactForm />
            </div>
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
