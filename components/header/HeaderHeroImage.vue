<template>
  <nuxt-picture
    src="/img/florian-skullmasher-ledru.jpg"
    class="hero-image"
  />
</template>

<style>
.hero-image {
  clip-path: polygon(0 0, 100% 0, 100% 82%, 0% 100%);
}

/* max-width does not fill the container entirely on desktop  */
.hero-image img {
  width: 100%;
}
</style>
