<template>
  <div class="flex flex-col items-center">
    <div class="text-lg">
      <h2 class="max-w-md mx-5 sm:mx-auto text-3xl font-light leading-normal">Un seul interlocuteur pour vos problèmes informatiques</h2>
      <div
        class="mx-5 sm:mx-0 sm:mb-0 relative sm:text-2xl sm:tracking-wider font-light"
      >
        <nuxt-picture
          src="/img/service-line.svg"
          class="service-line"
        />
        <h2
          class="pt-16 sm:pt-20 pb-3 sm:pb-5 pl-3 pl-10 sm:pl-28 sm:pr-28 transition-all text-neon duration-700 ease-out transform-gpu hover:scale-110 font-bold"
        >
          Corriger un bug sur mon site
        </h2>
        <h2
          class="pt-3 sm:pt-4 pb-4 sm:pb-6 pl-3 pl-10 sm:pl-28 sm:pr-28 transition-all text-neon duration-700 ease-out transform-gpu hover:scale-110 font-bold"
        >
          Booster la vitesse de mon site
        </h2>
        <h2
          class="pt-3 sm:pt-4 pb-4 sm:pb-5 pl-3 pl-10 sm:pl-28 sm:pr-28 transition-all text-neon duration-700 ease-out transform-gpu hover:scale-110 font-bold"
        >
          Améliorer ma visibilité sur Google
        </h2>
        <h2
          class="pt-3 sm:pt-4 pb-4 sm:pb-5 pl-3 pl-10 sm:pl-28 sm:pr-28 transition-all text-neon duration-700 ease-out transform-gpu hover:scale-110 font-bold"
        >
          Développement sur mesure
        </h2>
        <h2
          class="pt-3 sm:pt-4 pb-5 sm:pb-6 pl-3 pl-10 sm:pl-28 sm:pr-28 transition-all text-neon duration-700 ease-out transform-gpu hover:scale-110 font-bold"
        >
          Intervenir sur mon serveur linux
        </h2>
        <h2
          class="pt-3 sm:pt-5 pb-20 sm:pb-28 pl-3 pl-10 sm:pl-28 sm:pr-28 transition-all text-neon duration-700 ease-out transform-gpu hover:scale-110 font-bold"
        >
          Un freelance pour mon Agence
        </h2>
      </div>
    </div>
    <NuxtLink
      to="/services"
      class="inline-block py-3 px-6 mb-20 ml-7 uppercase font-bold tracking-wider ring-2 ring-inset ring-elegiac dark:ring-gray-200 rounded-lg hover:bg-elegiac dark:hover:bg-indigo-100 hover:text-indigo-100 dark:hover:text-elegiac transition shadow-lg"
    >
      Consulter les services →
    </NuxtLink>
  </div>
</template>
