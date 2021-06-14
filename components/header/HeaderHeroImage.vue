<template>
  <div>
    <nuxt-picture
      src="/img/florian-skullmasher-ledru.jpg"
      class="hero-image lg:hidden shadow-lg transition-all"
    />
    <nuxt-picture
      src="/img/florian-skullmasher-ledru-square.jpg"
      class="hidden lg:block hero-image-desktop rounded-full shadow-lg transition-all"
      sizes="lg:40vw"
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
