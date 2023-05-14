<template>
  <footer class="flow-root bg-gray-200 dark:bg-gray-800 pt-10 pb-10 md:pt-10 md:pb-10 pl-5 pr-5 transition duration-500">
    <p class="text-center uppercase mb-10">
      Numéro siren : 793553488
    </p>
    <div class="lg:flex max-w-screen-lg mx-auto">
      <div class="max-w-3xl mx-auto">
        <div class="flex gap-3 items-center mb-3">
          <div>
            <p v-show="$colorMode.value === 'light'">
              Deviens un vrai hacker et appuie sur la lune pour activer le
              <em class="text-black">dark mode</em>.
            </p>
            <p v-show="$colorMode.value === 'dark'">
              Appuie sur le soleil pour activer le
              <em class="text-white">light mode</em>
              et t'exploser les yeux !
            </p>
          </div>
          <ColorModeSwitch />
        </div>
        <p class="mb-4">
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
