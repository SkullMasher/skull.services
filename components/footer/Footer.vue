<template>
  <footer class="flow-root bg-indigo-200 dark:bg-gray-800 pt-10 pb-10 md:pt-10 md:pb-10 pl-5 pr-5">
    <p class="text-center uppercase mb-10">Numéro siren : 793553488</p>
    <div class="lg:flex max-w-screen-lg mx-auto">
      <div class="max-w-3xl mx-auto mb-10 space-y-5">
        <p v-show="$colorMode.value === 'light'">
          Deviens un vrai hacker et appuie sur la lune pour activer le
          <em class="text-black">dark mode</em>.
          <button @click="setDarkMode()">
            <moon class="w-8 md:w-10 ml-2 inline-block cursor-pointer transform transition duration-500 hover:rotate-45 opacity-75 hover:opacity-100 moon-shine" />
          </button>
        </p>
        <p v-show="$colorMode.value === 'dark'">
          Appuie sur le soleil pour activer le
          <em class="text-white">light mode</em>
          et t'exploser les yeux !
          <button @click="setLightMode()">
            <sun class="w-8 md:w-10 ml-2 inline-block cursor-pointer transform transition duration-500 hover:-rotate-180 opacity-75 hover:opacity-100 sun-shine" />
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
      <hl2Born class="w-28 mx-auto fill-current text-gray-700 transition duration-1000 hover:text-yellow-500" />
    </div>
  </footer>
</template>
<script>
import Vue from 'vue'
import Hl2Born from "~/assets/img/hl2-born.svg?inline";
import Moon from "~/assets/img/moon.svg?inline";
import Sun from "~/assets/img/sun.svg?inline";

export default Vue.extend({
  components: { Hl2Born, Moon, Sun },
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
