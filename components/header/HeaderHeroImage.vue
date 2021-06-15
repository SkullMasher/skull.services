<template>
  <div>
    <nuxt-img
      src="/img/florian-skullmasher-ledru.jpg"
      srcset="/img/florian-skullmasher-ledru.jpg 1024w, /img/florian-skullmasher-ledru-square.jpg"
      sizes="lg:100vw"
      class="hero-image shadow-lg transition-all"
    />
  </div>
</template>

<style>
.hero-image {
  clip-path: polygon(0 0, 100% 0, 100% 82%, 0% 100%);
}

.hero-image-desktop img {
  @apply rounded-full;
}
</style>
