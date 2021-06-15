<template>
  <div>
    <nuxt-picture
      src="/img/florian-skullmasher-ledru.jpg"
      class="hero-image"
    />
    <nuxt-picture
      src="/img/florian-skullmasher-ledru-square.jpg"
      class="hero-image-desktop"
    />
  </div>
</template>

<style>
.hero-image {
  @apply shadow-lg transition-all lg:hidden;

  clip-path: polygon(0 0, 100% 0, 100% 82%, 0% 100%);
}

.hero-image-desktop img {
  @apply max-w-xs xl:max-w-sm ml-20 mt-20 rounded-full shadow-lg transition-all hidden lg:block transform transform-gpu hover:rotate-3;
}
</style>
