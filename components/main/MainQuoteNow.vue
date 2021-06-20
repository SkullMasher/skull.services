<template>
  <div class="max-w-xl mx-auto mb-20 text-lg">
    <h2 class="mb-10 mx-5 text-3xl">
      Demander un devis gratuit !
    </h2>
    <div
      class="max-w-sm mx-3 sm:mx-auto mb-14 pl-2 pr-2 py-5 bg-gray-200 text-gray-800 transform -rotate-3 shadow-2xl"
    >
      <div class="flex items-center mb-5">
        <div
          class="mr-2 p-1 bg-white rounded-full transform shadow transform-gpu rotate-6 hover:-rotate-12 transition-all"
        >
          <img src="~assets/skullmasher.svg" class="w-12 h-12" />
        </div>
        <div>
          <p class="">Florian Ledru</p>
          <p class="text-sm">skull.services</p>
        </div>
      </div>
      <div class="ml-5">
        <h4 class="mb-2">Intervention urgente Wordpress</h4>
        <p class="max-w-xs mb-5 text-sm">
          Désactivation d'un plugin qui empeche le chargement du site.
        </p>
        <p class="mr-10 text-right text-2xl font-bold">50 €</p>
      </div>
    </div>
    <div class="max-w-sm mx-3 sm:mx-auto">
      <NuxtLink
        to="/services"
        class="inline-block py-3 px-6 uppercase font-bold tracking-wider ring-2 ring-inset ring-elegiac dark:ring-gray-200 rounded-lg hover:bg-elegiac dark:hover:bg-indigo-100 hover:text-indigo-100 dark:hover:text-elegiac transition shadow-lg"
      >
        Me contacter <ArrowRight class="w-6 h-6 inline" />
      </NuxtLink>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import ArrowRight from "~/static/img/arrow-right.svg?inline";

  export default Vue.extend({
    components: { ArrowRight },
  })
</script>
