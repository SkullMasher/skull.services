<template>
  <div class="flex flex-col sm:flex-row gap-4">
    <div>
      <NuxtLink
        to="/services"
        class="btn"
      >
        Consulter les services
      </NuxtLink>
    </div>
    <div>
      <NuxtLink
        to="/portfolio"
        class="btn--ghost"
      >
        Voir le portfolio <SvgoArrowRight class="w-6 h-6 inline" />
      </NuxtLink>
    </div>
  </div>
</template>
