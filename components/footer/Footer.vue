<template>
  <footer class="flow-root bg-gray-200 dark:bg-gray-800 pt-10 pb-10 md:pt-10 md:pb-10 pl-5 pr-5 transition duration-500">
    <p class="text-center uppercase mb-10">Numéro siren : 793553488</p>
    <div class="lg:flex max-w-screen-lg mx-auto">
      <div class="max-w-3xl mx-auto mb-10 space-y-5">
        <div>
          <p v-show="$colorMode.value === 'light'">
            Deviens un vrai hacker et appuie sur la lune pour activer le
            <em class="text-black">dark mode</em>.
            <button @click="$colorMode.preference = 'dark'">
              <SvgoMoon class="w-8 md:w-10 ml-2 inline-block cursor-pointer transform transition duration-500 hover:rotate-45 opacity-75 hover:opacity-100 moon-shine" />
            </button>
          </p>
          <p v-show="$colorMode.value === 'dark'">
            Appuie sur le soleil pour activer le
            <em class="text-white">light mode</em>
            et t'exploser les yeux !
            <button @click="$colorMode.preference = 'light'">
              <SvgoSun class="w-8 md:w-10 ml-2 inline-block cursor-pointer transform transition duration-500 hover:-rotate-180 opacity-75 hover:opacity-100 sun-shine" />
            </button>
          </p>
        </div>
        <p>
          Si vous regardez
          <a
            href="https://github.com/SkullMasher/skull.services"
            class="link-pretty"
          >
            le code source de ce site
          </a>,
          vous remarquerez que je n'ai pas utilisé Wordpress.
        </p>
        <p>Ce site n'utilise pas de cookie &#127850;, car il fait un régime keto &#129361;.</p>
      </div>
    </div>
  </footer>
</template>
