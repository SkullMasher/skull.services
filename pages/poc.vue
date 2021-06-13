<template>
  <div class="flow-root bg-gray-700 text-gray-200">
    <div class="text-gray-200">
      <HeaderHeroImage />
      <HeaderNavigation />
    </div>
    <div class="mb-14">
      <h1 class="text-4xl font-thin leading-relaxed text-center">
        <strong class="font-bold">BITCH</strong> the future is bright, the dream is now.
      </h1>
    </div>
    <section class="flex flex-col items-center text-center">
      <h2 class="mb-12 max-w-sm text-2xl font-light leading-relaxed">The counter exercise in typescript</h2>
      <p class="mb-5 text-8xl font-bold">{{ counter }}</p>
      <div>
        <button
          class="m-5 px-10 py-5 bg-blue-500 text-gray-200 text-2xl rounded-lg shadow"
          @click="substractOne"
        >
          -1
        </button>
        <button
          class="m-5 px-10 py-5 bg-blue-500 text-gray-200 text-2xl rounded-lg shadow"
          @click="addOne"
        >
          +1
        </button>
      </div>
      <button
        class="m-5 px-10 py-5 bg-gray-200 text-gray-700 text-2xl rounded-lg shadow uppercase"
        @click="resetCounter"
      >
        Reset
      </button>
    </section>
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
      <img
        src="~/assets/icons/doge.svg"
        class="floating-recommendation floating-recommendation-9"
      >
      <div class="text-gray-200">
        <h2 class="text-4xl uppercase mb-10">J'ai besoin de</h2>
        <div class="text-2xl mb-14 ml-20">
          <p class="mb-8 font-bold">Corriger un bug sur mon site</p>
          <p class="mb-8 font-bold">Booster la vitesse de mon site</p>
          <p class="mb-8 font-bold">Améliorer ma visibilité sur Google</p>
          <p class="mb-8 font-bold">Développement sur mesure</p>
          <p class="mb-8 font-bold">Intervenir sur mon serveur linux</p>
          <p class="mb-8 font-bold">Un freelance pour mon Agence</p>
        </div>
      </div>
    </section>
    <section class="h-screen"></section>
    <p>
      <NuxtLink to="/">Back to homepage BITCH !</NuxtLink>
    </p>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  data: () => ({
    counter: 0,
  }),

  mounted() {
    const recommendations: any = document.querySelectorAll('.floating-recommendation')
    console.log(recommendations)
  },
  methods: {
    /**
     * Calculates the offset of an element from the top of the page
     * @param {HTMLElement} element
     * @return {number}
     */
    offsetTop(element: any, acc: number = 0): number {
      if (element.offsetParent) {
        return this.offsetTop(element.offsetParent, acc + element.offsetTop)
      }

      return acc + element.offsetTop
    },
    parallax(element: any): void {
      const y: number = 0.3

      function onIntersection() {
        console.log('lodr')
      }

      const observer = new IntersectionObserver(onIntersection);
      observer.observe(element)
    },
    addOne(): void {
      this.counter++
    },
    substractOne(): void {
      this.counter--
    },
    resetCounter(): void {
      this.counter = 0
    },
  },
})
</script>

<style>
/*
body::after {
  content: '';
  height: 2px;
  position: fixed;
  top: calc(50% - 1px);
  left: 0;
  right: 0;
  background-color: red;
}
*/

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
  top: 25vh;
  left: 15vw;
}

.floating-recommendation-5 {
  top: 10vh;
  left: 35vw;
}

.floating-recommendation-6 {
  top: 75vh;
  left: 45vw;
}

.floating-recommendation-7 {
  top: 65vh;
  right: 20vw;
}

.floating-recommendation-8 {
  top: 45vh;
  left: 20vw;
}

.floating-recommendation-9 {
  top: 80vh;
  left: 10vw;
}
</style>
