<template>
  <section id="contact" class="group text-lg transition duration-500 contact-shadow">
    <div class="bg-indigo-200 dark:bg-elegiac-dark clippath-contactbloc">
      <div class="max-w-5xl mx-5 sm:mx-auto pt-20 pb-20">
        <div class="mb-10 px-2">
          <h2 class="text-3xl mb-2">
            Contacter Flo - Demander un devis gratuit
          </h2>
          <p class="plz-no-spamerino" data-user="nairolf" data-website="oi.rehsamlluks"></p>
        </div>
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

  .contact-shadow {
    filter: drop-shadow(0px -0.2em 0.3em rgba(0, 0, 0, 0.3));
  }

.plz-no-spamerino:before {
  content: attr(data-website) "\0040" attr(data-user);
  unicode-bidi: bidi-override;
  direction: rtl;
}
</style>
