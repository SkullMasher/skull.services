<template>
  <section id="contact" class="group pt-20 pb-20 text-lg bg-indigo-200 dark:bg-elegiac-dark transition duration-500 clippath-contactbloc">
    <div class="mx-5">
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
