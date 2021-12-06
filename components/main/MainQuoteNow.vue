<template>
  <div>
    <div
      class="max-w-xs mx-3 xs:mx-auto mb-14 pl-2 pr-2 py-5 bg-gray-200 text-gray-800 transform -rotate-3 shadow-2xl group-hover:-rotate-1 transition-transform duration-700"
    >
      <div class="flex items-center mb-5">
        <div
          class="mr-2 p-1 bg-white rounded-full transform shadow transform-gpu rotate-6 hover:-rotate-12 transition-all"
        >
          <img src="~assets/skullmasher.svg" width="51" height="51" class="w-12 h-12" />
        </div>
        <div>
          <p class="">Florian Ledru</p>
          <p class="text-sm">skullmasher.io</p>
        </div>
      </div>
      <div class="ml-5">
        <h4 class="mb-2">Intervention urgente Wordpress</h4>
        <p class="max-w-xs mb-5 text-sm">
          Désactivation d'un plugin qui empêche le chargement du site.
        </p>
        <p class="mr-10 text-right text-2xl font-bold">50 €</p>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import ArrowRight from "~/assets/img/arrow-right.svg?inline";

  export default Vue.extend({
    components: { ArrowRight },
  })
</script>
