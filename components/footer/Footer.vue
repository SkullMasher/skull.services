<template>
  <footer class="flow-root bg-gray-200 dark:bg-gray-800 pt-10 md:pt-10 transition duration-500 overflow-hidden">
    <p class="text-center uppercase mb-10">
      Numéro siren : 793553488
    </p>
    <div class="lg:flex max-w-screen-lg mx-auto mb-20 px-5">
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
        <p class="mb-4">Ce site n'utilise pas de cookie &#127850;, car il fait un régime keto &#129361;.</p>
        <p class="mb-4">Je n'ai pas de réseaux sociaux mais parfois <NuxtLink to="https://youtu.be/nF40HTXmYtQ" target="_blank" class="link-pretty">je fais des vidéos sur internet</NuxtLink>.</p>
        <p class="">On m'a demandé de mettre une licorne içi ¯\_(ツ)_/¯</p>
      </div>
    </div>
    <div class="unicorn-gradient">
      <div class="animate-unicorn">
        <nuxt-picture src="/img/unicorn.png" width="300" height="217" loading="lazy"></nuxt-picture>
      </div>
    </div>
  </footer>
</template>

<style>
.unicorn-gradient {
  background: radial-gradient(80% 85% at 50% 100%, hsla(266, 60%, 70%, 1) 0%, rgba(255, 255, 255, 0) 100%);
}

.animate-unicorn {
  animation: unicorn 5s infinite alternate ease-in-out;
}

@keyframes unicorn {
    from {
        transform: translateX(-300px);
    }
    to {
        transform: translateX(100%);
    }
}
</style>
