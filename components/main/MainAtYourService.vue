<template>
  <div class="flex flex-col items-center">
    <div class="flow-root max-w-md mx-5 sm:mx-auto text-lg">
      <h2 class="text-3xl mb-20 font-light leading-normal">Un seul interlocuteur pour vos problèmes informatiques</h2>
      <div
        class="mb-24 ml-5 xs:ml-12 relative sm:text-2xl sm:tracking-wider font-light"
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
      class="inline-block py-3 px-6 mb-20 ml-7 uppercase font-bold tracking-wider ring-2 ring-inset ring-elegiac dark:ring-gray-200 rounded-lg transition-shadow hover:bg-elegiac dark:hover:bg-indigo-100 hover:text-indigo-100 dark:hover:text-elegiac transition shadow-lg"
    >
      Consulter les services →
    </NuxtLink>
  </div>
</template>
<style>
.service-line {
  position: absolute;
  left: -42px;
  top: -4rem;
}

@media (min-width: 640px) {
  .service-line {
    left: -115px;
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
