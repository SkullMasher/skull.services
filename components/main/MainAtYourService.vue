<template>
  <section class="group relative flex flex-col items-center mb-24">
    <svg-responsive class="hidden lg:block w-32 h-32 top-16 lg:right-52 xl:right-1/4 absolute animate-float-slow filter drop-shadow-md" />
    <svg-lightning class="hidden lg:block w-20 h-20 bottom-1/4 right-32 absolute animate-float-fast filter drop-shadow-md transform-gpu rotate-12 group-hover:rotate-45 text-yellow-500 group-hover:text-green-500 transition-all duration-700" />
    <svg-code class="hidden xl:block w-16 h-16 top-1/3 left-40 2xl:left-72 absolute animate-float-slower filter drop-shadow-md transform-gpu text-indigo-400 group-hover:text-indigo-500 transition-all duration-700" />
    <svg-apppro class="hidden xl:block w-32 h-32 bottom-6 left-8 2xl:left-32 absolute animate-float filter drop-shadow-md text-purple-500 group-hover:text-pink-500 transition-all duration-700 transform-gpu" />
    <svg-linux class="hidden lg:block w-16 h-16 -bottom-28 right-1/4 absolute animate-wiggle filter drop-shadow-md" />
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
          Avoir un site visible et fonctionnel
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
import SvgLightning from "~/assets/img/lightning.svg?inline"
import SvgCode from "~/assets/img/code.svg?inline"
import SvgResponsive from "~/assets/img/responsive.svg?inline"
import SvgApppro from "~/assets/img/apppro.svg?inline"
import SvgLinux from "~/assets/img/linux.svg?inline"

export default Vue.extend({
  components: {
    ArrowRight,
    ServiceLine,
    SvgLightning,
    SvgCode,
    SvgResponsive,
    SvgApppro,
    SvgLinux
  },
})
</script>
