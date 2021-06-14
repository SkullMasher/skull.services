<template>
  <div class="md:flex mx-5 mb-20 text-lg text-gray-200">
    <nuxt-picture
      src="/img/florian-skullmasher-ledru-kek.jpg"
      class="about-image transition-all"
    />
    <div class="ml-10">
      <h2 class="mb-10 text-4xl">Geek à plein temps !</h2>
      <p class="ml-5 mb-10">
        Actuelement, j'opère exclusivement en ligne puisque je suis <a href="">situé en campagne d'Arles</a>.
        Issu de la banlieue parisienne, je peux me déplacer dans les villes de
        Paris, Nantes, Toulouse, Montpellier, Nimes, Saragosse ou Madrid.
      </p>
      <NuxtLink
        to="/about"
        class="inline-block mx-5 ml-5 px-7 py-3 rounded-full bg-blue-500 uppercase text-gray-200"
      >
        En savoir plus
      </NuxtLink>
    </div>
  </div>
</template>
<style>
.about-image img {
  border-radius: 9999px;
}
</style>
