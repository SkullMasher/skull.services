<template>
  <section class="flex flex-col items-center mb-24">
    <div class="text-lg">
      <h2 class="max-w-md mx-5 sm:mx-auto text-3xl font-light leading-normal">
        <span class="font-medium">Un seul interlocuteur</span> pour vos problèmes informatiques
      </h2>
      <div
        class="mx-5 sm:mx-0 sm:mb-0 relative sm:text-2xl sm:tracking-wider font-light"
      >
        <serviceLine src="/service-line.svg" class="service-line" />
        <h3
          class="pt-16 sm:pt-20 pb-3 sm:pb-5 pl-3 pl-10 sm:pl-28 sm:pr-28 transition-all text-neon duration-700 ease-out transform-gpu hover:scale-110 font-bold"
        >
          Avoir un site visible et fonctionel
        </h3>
        <h3
          class="pt-3 sm:pt-4 pb-4 sm:pb-6 pl-3 pl-10 sm:pl-28 sm:pr-28 transition-all text-neon duration-700 ease-out transform-gpu hover:scale-110 font-bold"
        >
          Réaliser une application
        </h3>
        <h3
          class="pt-3 sm:pt-4 pb-4 sm:pb-5 pl-3 pl-10 sm:pl-28 sm:pr-28 transition-all text-neon duration-700 ease-out transform-gpu hover:scale-110 font-bold"
        >
          Améliorer la visibilité sur Google
        </h3>
        <h3
          class="pt-3 sm:pt-4 pb-4 sm:pb-5 pl-3 pl-10 sm:pl-28 sm:pr-28 transition-all text-neon duration-700 ease-out transform-gpu hover:scale-110 font-bold"
        >
          Booster la vitesse de votre site
        </h3>
        <h3
          class="pt-3 sm:pt-4 pb-5 sm:pb-6 pl-3 pl-10 sm:pl-28 sm:pr-28 transition-all text-neon duration-700 ease-out transform-gpu hover:scale-110 font-bold"
        >
          Intervenir sur votre serveur linux
        </h3>
        <h3
          class="pt-3 sm:pt-5 pb-20 sm:pb-28 pl-3 pl-10 sm:pl-28 sm:pr-28 transition-all text-neon duration-700 ease-out transform-gpu hover:scale-110 font-bold"
        >
          Un freelance disponible pour votre Agence Web
        </h3>
      </div>
    </div>
    <NuxtLink
      to="/services"
      class="btn--outline"
    >
      Consulter les services <ArrowRight class="w-6 h-6 inline" />
    </NuxtLink>
  </section>
</template>
<script>
import Vue from 'vue'
import ArrowRight from "~/assets/img/arrow-right.svg?inline"
import ServiceLine from "~/assets/img/service-line.svg?inline"

export default Vue.extend({
  components: { ArrowRight, ServiceLine },
})
</script>
