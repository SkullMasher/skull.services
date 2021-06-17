<template>
  <div>
    <div class="max-w-4xl lg:mx-auto md:flex mx-5 mb-20 text-lg">
      <figure class="mb-10 w-4/5 sm:w-1/3 mx-auto">
        <nuxt-picture
          src="/img/florian-skullmasher-ledru-alpilles.jpg"
          class="about-image"
        />
        <figcaption class="max-w-xs mx-auto text-sm text-center italic">
          Photo non professionnel durant une randonnée au parc naturel des Alpilles en juin 2021
        </figcaption>
      </figure>
      <div class="md:ml-10 md:mr-5 w-full sm:w-2/3">
        <h2 class="mb-6 text-3xl">Geek nomade &nbsp;!</h2>
        <div class="ml-5 mb-10">
          <p class="mb-5">
            Actuelement, j'opère exclusivement en ligne depuis <a class="link-pretty" target="_blank" href="https://www.camargue.fr/site/levillagecamarguais/">un village de vacance</a> à Arles dans lequel je transforme vos problème en solution informatique.
          </p>
          <p>
            De nature active je change souvent mon lieu de vie. Je profite de
            cette vie nomade pour rencontrer mes clients sur le téritoire ainsi
            que mes amis et ma famille éparpillé entre la france et
            l'espagne. Je peux me déplacer dans les villes de Paris, Nantes,
            Toulouse, Montpellier, Nimes, Lyon, Saragosse et Madrid.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.about-image img {
  @apply shadow-lg ring-4 rounded-full mb-5 hover:ring-8 ring-elegiac-light hover:ring-elegiac dark:ring-gray-100 hover:dark:ring-indigo-200 ring-opacity-80 hover:ring-opacity-100 transition-all transform transform-gpu hover:-rotate-2;
}
</style>
