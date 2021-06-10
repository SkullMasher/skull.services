<template>
  <div class="flow-root bg-gray-700">
    <div class="text-gray-200">
      <HeaderHeroImage />
      <HeaderNavigation />
    </div>
    <div class="mb-14 text-gray-200">
      <h1 class="text-4xl font-thin leading-relaxed text-center">
        <strong class="font-bold">BITCH</strong> the future is bright, the dream is now.
      </h1>
    </div>
    <section class="h-screen flex justify-center items-center relative">
      <img
        src="~/assets/icons/bug.png"
        class="floating-recommendation floating-recommendation-1"
      >
      <img
        src="~/assets/icons/Vue.svg"
        class="floating-recommendation floating-recommendation-2"
      >
      <img
        src="~/assets/icons/doge.svg"
        class="floating-recommendation floating-recommendation-3"
      >
      <img
        src="~/assets/icons/rocket.png"
        class="floating-recommendation floating-recommendation-4"
      >
      <img
        src="~/assets/icons/linux.png"
        class="floating-recommendation floating-recommendation-5"
      >
      <img
        src="~/assets/icons/lightning.png"
        class="floating-recommendation floating-recommendation-6"
      >
      <img
        src="~/assets/icons/graph.png"
        class="floating-recommendation floating-recommendation-7"
      >
      <img
        src="~/assets/icons/doge.svg"
        class="floating-recommendation floating-recommendation-8"
      >
      <div class="text-gray-200">
        <h2 class="text-4xl uppercase mb-10">J'ai besoin de</h2>
        <div class="text-2xl mb-14 ml-20">
          <p class="mb-8 font-bold">Corriger un bug sur mon site</p>
          <p class="mb-8 font-bold">Booster la vitesse de mon site</p>
          <p class="mb-8 font-bold">Améliorer ma visibilité sur Google</p>
          <p class="mb-8 font-bold">Développement sur meure</p>
          <p class="mb-8 font-bold">Intervenir sur mon serveur linux</p>
        </div>
      </div>
    </section>
    <p>
      <NuxtLink to="/">Back to homepage BITCH !</NuxtLink>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.floating-recommendation {
  position: absolute;
  max-width: 100px;
  opacity: 1;
}

.floating-recommendation-1 {
  top: 0;
  left: 7vw;
}

.floating-recommendation-2 {
  top: 15vh;
  right: 15vw;
}

.floating-recommendation-3 {
  top: 35vh;
  right: 5vw;
}

.floating-recommendation-4 {
  top: 30vh;
  left: 15vw;
}

.floating-recommendation-5 {
  top: 10vh;
  left: 35vw;
}

.floating-recommendation-6 {
  top: 80vh;
  left: 45vw;
}

.floating-recommendation-7 {
  top: 45vh;
  right: 20vw;
}

.floating-recommendation-8 {
  top: 45vh;
  left: 20vw;
}


</style>
