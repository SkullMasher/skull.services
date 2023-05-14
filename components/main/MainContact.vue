<template>
  <section id="contact" class="group text-lg bg-indigo-200 dark:bg-elegiac-dark transition duration-500">
    <div class="mx-5 pt-20 pb-20 clippath-contactbloc">
      <div class="max-w-5xl mx-auto">
        <h2 class="mb-10 text-3xl">
          Demander un devis gratuit !
        </h2>
        <div class="lg:flex gap-12">
          <MainQuoteNow
            class="-rotate-1 group-hover:rotate-1 transform transition-transform duration-700"
            :items="['Désactivation d\'un plugin qui empêche le chargement du site']"
          />
          <MainContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .clippath-contactbloc {
      clip-path: polygon(39.38% 2%, 57.48% 3%, 77.22% 4%, 100% 0%, 100% 100%, 0px 100%, 0px 1%, 18.75% 4.09%);
    }
</style>
