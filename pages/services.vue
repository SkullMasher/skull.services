<template>
  <div class="flow-root bg-indigo-100 text-gray-800 dark:bg-elegiac dark:text-gray-200 transition duration-500">
    <Header />
    <main>
      <section class="max-w-sm mx-5 sm:mx-auto my-10">
        <p class="text-2xl sm:text-4xl mb-5">Page en construction</p>
        <NuxtLink
          to="/"
          class="inline-block mb-6 py-3 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg uppercase font-bold tracking-wider shadow transition-colors text-gray-200"
        >
          Retour à l'accueil
        </NuxtLink>
      </section>
      <section class="max-w-4xl lg:mx-auto mx-5 mb-20 text-lg">
        <div class="mb-20">
          <h2 class="text-2xl sm:text-4xl mb-5">Accélérer mon site Wordpress</h2>
          <div class="sm:grid grid-cols-3 gap-4">
            <div class=""></div>
            <div class="col-span-2">
              <p class="mb-5">Mon site est lent et j'ai besoin de l'optimiser rapidement pour améliorer mon score Google Page Speed.</p>
              <ul class="ml-10 mb-5 list-disc space-y-1">
                <li>0 plugins payant, pas de paiement mensuel</li>
                <li>Optimisation automatique des images</li>
                <li>Mise en cache</li>
                <li>Minification des HTML, CSS et Javascript</li>
                <li>Chargement diféré des script et images.</li>
              </ul>
              <p class="text-4xl mb-5">150 €</p>
              <button class="btn">Contacter maintenant</button>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-2xl sm:text-4xl mb-5">Intégration responsive de maquette</h2>
          <div class="sm:grid grid-cols-3 gap-4">
            <div class=""></div>
            <div class="col-span-2">
              <p class="mb-5">Intégration responsive mobile first de maquettes pour tous type de framework.</p>
              <ul class="ml-10 mb-5 list-disc space-y-1">
                <li>Wordpress</li>
                <li>React / Next.JS</li>
                <li>Vue / NuxtJS</li>
                <li>Animation CSS</li>
              </ul>
              <p class="text-4xl mb-5">À partir 300 €</p>
              <button class="btn">Demander mon devis</button>
            </div>
          </div>
        </div>

      </section>
    </main>
    <Footer />
  </div>
</template>
