<template>
  <nuxt-picture
    src="/img/florian-skullmasher-ledru.jpg"
    class="hero-image shadow-lg transition-all"
    sizes="lg:100vw xl:45vw"
  />
</template>

<style>
.hero-image {
  clip-path: polygon(0 0, 100% 0, 100% 82%, 0% 100%);
}

@media (min-width: 1025px) {
  .hero-image {
    clip-path: polygon(0 0, 60% 0, 69% 66%, 0% 100%);
  }
}

/* max-width does not fill the container entirely on desktop  */
.hero-image img {
  /* width: 100%; */
}

@media (min-width: 1025px) {
  .hero-image img {
    /* border-radius: 50%; */
  }
}
</style>
