<template>
  <div class="sm:flex">
    <div class="sm:mr-4">
      <NuxtLink
        to="/services"
        class="inline-block mb-6 py-3 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg uppercase font-bold tracking-wider shadow transition-colors text-gray-200"
      >
        Consulter les services
      </NuxtLink>
    </div>
    <div>
      <NuxtLink
        to="/portfolio"
        class="inline-block py-3 px-6 uppercase font-bold tracking-wider text-elegiac dark:text-indigo-100 hover:ring-2 ring-inset ring-elegiac dark:ring-indigo-100 rounded-lg transition-shadow"
      >
        Voir le portfolio <ArrowRight class="w-6 h-6 inline" />
      </NuxtLink>
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
