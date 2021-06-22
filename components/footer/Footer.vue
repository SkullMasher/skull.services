<template>
  <footer class="flow-root bg-indigo-200 dark:bg-gray-800 pt-5 pb-5 md:pt-10 md:pb-10 pl-5 pr-5">
    <div class="max-w-3xl mx-auto space-y-5">
      <p class="text-center uppercase">Numéro siren : 793553488</p>
      <p v-show="$colorMode.value === 'light'">
        Deviens un vrai hacker et appuie sur la lune pour activer le
        <em class="text-black">dark mode</em>.
        <button @click="setDarkMode()">
          <nuxt-img
            class="w-8 md:w-10 ml-2 inline-block cursor-pointer transform transition duration-500 hover:rotate-45 opacity-75 hover:opacity-100 moon-shine"
            format="svg"
            src="/img/moon.svg"
          />
        </button>
      </p>
      <p v-show="$colorMode.value === 'dark'">
        Appuie sur le soleil pour activer le
        <em class="text-white">light mode</em>
        et t'exploser les yeux !
        <button @click="setLightMode()">
          <nuxt-img
            class="w-8 md:w-10 ml-2 inline-block cursor-pointer transform transition duration-500 hover:-rotate-180 opacity-75 hover:opacity-100 sun-shine"
            format="svg"
            src="/img/sun.svg"
          />
        </button>
      </p>
      <p>
        Si vous regarder
        <a
          href="https://github.com/SkullMasher/skull.services"
          class="link-pretty"
        >
          le code source de ce site
        </a>
        vous remarquez que je n'ai pas utilisé wordpress.
      </p>
      <p>Ce site n'utilise pas de cookie &#127850;, car il fais un régime keto &#129361;.</p>
      <p>Normalement ici je met une citation d'un rocker mort à 27 ans.</p>
    </div>
  </footer>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  methods: {
    setLightMode() {
      this.$colorMode.preference = 'light'
    },
    setDarkMode() {
      this.$colorMode.preference = 'dark'
    }
  }
})
</script>
