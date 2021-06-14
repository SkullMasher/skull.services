<template>
  <div class="flex flex-col items-center">
    <div class="flow-root mx-5 text-lg">
      <div
        class="mb-24 ml-5 relative sm:text-2xl sm:tracking-wider font-light"
      >
        <nuxt-picture
          src="/img/service-line.svg"
          class="service-line"
        />
        <h2 class="mb-7 sm:mb-9">Corriger un bug sur mon site</h2>
        <h2 class="mb-7 sm:mb-9">Booster la vitesse de mon site</h2>
        <h2 class="mb-7 sm:mb-9">Améliorer ma visibilité sur Google</h2>
        <h2 class="mb-7 sm:mb-9">Développement sur mesure</h2>
        <h2 class="mb-7 sm:mb-9">Intervenir sur mon serveur linux</h2>
        <h2 class="mb-7 sm:mb-9">Un freelance pour mon Agence</h2>
      </div>
    </div>
    <NuxtLink
      to="/services"
      class="inline-block py-3 px-6 mb-20 ml-7 uppercase font-bold tracking-wider ring-2 ring-inset ring-elegiac dark:ring-gray-200 rounded-lg transition-shadow hover:bg-elegiac hover:text-indigo-100 dark:hover:text-indigo-100 dark:hover:text-elegiac transition shadow-lg"
    >
      Consulter les services →
    </NuxtLink>
  </div>
</template>
<style>
.service-line {
  position: absolute;
  left: -25px;
  top: -4rem;
}

@media (min-width: 640px) {
  .service-line {
    left: -90px;
    top: -5rem;
  }
}

.service-line img {
  height: 455px;
}

@media (min-width: 640px) {
  .service-line img {
    height: 560px;
  }
}
</style>
