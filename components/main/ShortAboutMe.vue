<template>
  <section>
    <div class="max-w-5xl lg:mx-auto md:flex gap-8 mx-5 mb-20 text-lg">
      <figure class="mb-10 w-4/5 md:w-1/3 mx-auto">
        <nuxt-picture
          src="/img/florian-ledru-2023.jpg"
          class="about-image"
          loading="lazy"
          width="278"
          height="278"
          sizes="xs:224px sm:300px md:230px lg:278px"
        />
      </figure>
      <div class="w-full md:w-2/3">
        <h2 class="mb-6 text-3xl">
          Geek nomade&nbsp;!
        </h2>
        <div class="ml-5 mb-10">
          <p class="mb-5">
            Actuellement, j'opère exclusivement en ligne depuis
            <a
              class="link-pretty"
              target="_blank"
              href="https://www.camargue.fr/site/levillagecamarguais/"
            >
              un village de vacances
            </a>
            à Arles.
          </p>
          <p>
            De nature active, je change souvent mon lieu de vie. Je profite de
            cette vie nomade pour rencontrer mes clients sur le territoire ainsi
            que mes amis et ma famille éparpillée entre la France et l'Espagne
            (en dehors des périodes de pandémie mondiale bien sûr). Je peux me
            déplacer dans les villes de Paris, Nantes, Toulouse, Montpellier,
            Nîmes, Lyon, Saragosse et Madrid.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.about-image img {
  @apply shadow-lg ring-4 rounded-full mb-5 mx-auto hover:ring-8 ring-elegiac-light hover:ring-elegiac dark:ring-gray-100 hover:dark:ring-indigo-200 ring-opacity-80 hover:ring-opacity-100 transition-all transform transform-gpu hover:-rotate-2;
}
</style>
