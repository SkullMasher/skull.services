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
        class="inline-block py-3 px-6 uppercase font-bold tracking-wider text-elegiac hover:ring-2 ring-inset ring-elegiac dark:ring-gray-200 rounded-lg transition-shadow"
      >
        Voir le portfolio →
      </NuxtLink>
    </div>
  </div>
</template>
