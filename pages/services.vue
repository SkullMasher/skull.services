<template>
  <div class="flow-root bg-indigo-100 text-gray-800 dark:bg-elegiac dark:text-gray-200 transition duration-500">
    <Header />
    <main>
      <section class="max-w-4xl lg:mx-auto mx-5 mb-20 text-lg mb-20">
        <h2 class="text-2xl sm:text-4xl mb-5">Performance Wordpress</h2>
        <div class="sm:grid grid-cols-3 gap-16">
          <div
            class="max-w-sm mx-3 sm:mx-auto mb-14 px-4 py-5 bg-gray-200 text-gray-800 transform -rotate-3 shadow-2xl"
          >
            <div class="flex items-center mb-5">
              <div
                class="mr-2 p-1 bg-white rounded-full transform shadow transform-gpu rotate-6 hover:-rotate-12 transition-all"
              >
                <img src="~assets/skullmasher.svg" class="w-12 h-12" />
              </div>
              <div>
                <p class="">Florian Ledru</p>
                <p class="text-sm">skullmasher.io</p>
              </div>
            </div>
            <div class="">
              <h4 class="mb-2">Performance Wordpress</h4>
              <p class="max-w-xs mb-5 text-sm">
                Instalation et configuration d'un cache
              </p>
              <p class="mr-10 text-right text-2xl font-bold">50 €</p>
            </div>
          </div>
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
      </section>
      <section class="max-w-4xl lg:mx-auto mx-5 mb-20 text-lg mb-20">
        <h2 class="text-2xl sm:text-4xl mb-5">Intégration responsive de maquette</h2>
        <div class="sm:grid grid-cols-3 gap-16">
          <div
            class="max-w-sm mx-3 sm:mx-auto mb-14 pl-2 pr-2 py-5 bg-gray-200 text-gray-800 transform -rotate-3 shadow-2xl"
          >
            <div class="flex items-center mb-5">
              <div
                class="mr-2 p-1 bg-white rounded-full transform shadow transform-gpu rotate-6 hover:-rotate-12 transition-all"
              >
                <img src="~assets/skullmasher.svg" class="w-12 h-12" />
              </div>
              <div>
                <p class="">Florian Ledru</p>
                <p class="text-sm">skullmasher.io</p>
              </div>
            </div>
            <div class="ml-5">
              <h4 class="mb-2">Intervention urgente Wordpress</h4>
              <p class="max-w-xs mb-5 text-sm">
                Désactivation d'un plugin qui empeche le chargement du site.
              </p>
              <p class="mr-10 text-right text-2xl font-bold">50 €</p>
            </div>
          </div>
          <div class="col-span-2">
            <p class="mb-5">Intégration responsive mobile first de maquettes pour tous type de framework avec animation qui font <em>WOOSH</em>.</p>
            <ul class="ml-10 mb-5 list-disc space-y-1">
              <li>Wordpress</li>
              <li>React / Next.js</li>
              <li>Vue / Nuxt</li>
            </ul>
            <p class="text-4xl mb-5">À partir 300 €</p>
            <button class="btn">Envoyer mes maquettes</button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
