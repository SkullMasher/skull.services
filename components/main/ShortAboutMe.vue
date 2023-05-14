<template>
  <section>
    <div class="max-w-5xl mx-5 lg:mx-auto mb-20 text-xl">
      <div class="md:flex gap-8">
        <figure class="mb-10 w-4/5 md:w-1/3 mx-auto">
          <nuxt-picture
            src="/img/florian-ledru-2023.jpg"
            class="about-image"
            loading="lazy"
            width="278"
            height="278"
            sizes="xs:224px sm:300px md:230px lg:278px"
          />
          <figcaption class="max-w-xs mx-auto text-sm text-center italic">
            Florian Ledru en février 2023
          </figcaption>
        </figure>
        <div class="w-full md:w-2/3">
          <h2 class="mb-6 text-3xl">Geek nomade&nbsp;!</h2>
          <div class="ml-5 mb-10 space-y-5">
            <p>
              Actuellement en plein centre de Nancy, je me déplace en fonction de vos besoins, le plus souvent à Paris.
            </p>
            <p>
              Engagé auprès des PME depuis 2019, j'apporte mes 10 années d'expertise informatique pour apporter <strong>des solutions qui font gagné du temps, de l'argent et de la santé mental</strong>.
            </p>
            <p>
              <NuxtLink to="/portfolio" class="link-pretty">Les sociétés</NuxtLink> qui me font confiance bénificie d'un référant technique pour tout les projets ou problématique informatique quelle pourrait rencontrer.
            </p>
          </div>
          <h2 class="mb-6 text-3xl">Consultant dévellopeur</h2>
          <div class="ml-5 mb-10 space-y-5">
            <p>Chaque année, je participe à des missions de plusieurs mois en tant que Chef d'équipe frontend (Tech Lead Front).</p>
            <p>Mon profil polivalant, dont l'expertise permet d'intervenir aussi comme designer UX/UI, Administrateur Système, Devops... Représente l'intermédiaire idéal entre les develloppeurs et le reste de la hierarchie pour coller à la deadline.</p>
            <NuxtLink to="CV-Florian-Ledru-Freelance-2023.pdf" target="_blank" class="btn--outline">Voir mon CV </NuxtLink>
          </div>
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
