<template>
  <div class="mb-20 text-lg">
    <h2 class="mb-10 mx-5 text-4xl text-gray-200">
      Demander un devis gratuit !
    </h2>
    <div
      class="mx-3 mb-10 pl-2 pr-2 py-5 bg-gray-200 text-gray-800 transform -rotate-3 shadow-2xl"
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
        <h4 class="">Intervention urgente Wordpress</h4>
        <p class="mb-5 text-sm">
          Désactivation d'un plugin qui empeche le chargement du site.
        </p>
        <p class="mr-10 text-right text-2xl font-bold">50 €</p>
      </div>
    </div>
    <NuxtLink
      to="/contact"
      class="inline-block mx-5 ml-5 px-7 py-3 rounded-full bg-blue-500 uppercase text-gray-200"
    >
      Me contacter
    </NuxtLink>
  </div>
</template>
