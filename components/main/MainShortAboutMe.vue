<template>
  <div>
    <div class="max-w-4xl lg:mx-auto md:flex mx-5 mb-20 text-lg">
      <figure class="mb-10 max-w-xs mx-auto flex-grow">
        <nuxt-picture
          src="/img/florian-skullmasher-ledru-kek.jpg"
          class="about-image"
        />
        <figcaption class="w-32 mx-auto text-sm text-center italic">
          Florian au parc naturel des Alpilles en juin 2021
        </figcaption>
      </figure>
      <div class="flex-shrink md:ml-10 md:mr-5">
        <h2 class="mb-6 text-3xl">Geek à plein temps&nbsp;!</h2>
        <p class="ml-5 mb-10">
          Actuelement, j'opère exclusivement en ligne puisque je suis <a href="">situé en campagne d'Arles</a>.
          Issu de la banlieue parisienne, je peux me déplacer dans les villes de
          Paris, Nantes, Toulouse, Montpellier, Nimes, Saragosse ou Madrid.
        </p>
      </div>
    </div>
  </div>
</template>
<style>
.about-image img {
  @apply shadow-lg ring-4 rounded-full mb-5 hover:ring-8 ring-elegiac-light hover:ring-elegiac dark:ring-gray-100 hover:dark:ring-indigo-200 ring-opacity-80 hover:ring-opacity-100 transition-all transform transform-gpu hover:-rotate-2;
}
</style>
