<template>
  <div class="flow-root bg-indigo-100 text-gray-800 dark:bg-elegiac dark:text-gray-200 transition duration-500">
    <Header title="Liste des <strong>services</strong> et <strong>prestations</strong>" />
    <main>
      <section class="group">
        <div class="max-w-5xl lg:mx-auto mx-5 mb-20 text-lg mb-20">
          <h2 class="text-2xl sm:text-4xl mb-5 flex items-center mb-8">
            <svg-lightning class="mr-4 rotate-12 group-hover:rotate-45 text-green-500 sm:text-yellow-500 group-hover:text-green-500 transition-all duration-700" />
            <span>Performance Wordpress</span>
          </h2>
          <div class="sm:grid grid-cols-5 gap-8 md:gap-16">
            <div
              class="col-span-2 max-w-sm mx-3 sm:mx-auto mb-14 px-4 py-5 bg-gray-200 text-gray-800 -rotate-2 group-hover:-rotate-1 transition-transform duration-700 transform-gpu shadow-2xl"
            >
              <div class="flex items-center mb-5">
                <div
                  class="mr-2 p-1 bg-white rounded-full transform shadow transform-gpu rotate-6 hover:-rotate-12 transition-all"
                >
                  <img src="~assets/skullmasher.svg" width="50" height="50" />
                </div>
                <div>
                  <p class="">Florian Ledru</p>
                  <p class="text-sm">skullmasher.io</p>
                </div>
              </div>
              <div>
                <h4 class="mb-2">Performance Wordpress</h4>
                <div class="max-w-xs mb-5 text-sm space-y-2">
                  <p>Installer et configurer un cache</p>
                  <p>Réduire et concaténer les Javascript, CSS, HTML</p>
                  <p>Optimiser automatiquement les images</p>
                  <p>Précharger les fichiers de police</p>
                </div>
                <p class="mr-10 text-right text-2xl font-bold">200 €</p>
              </div>
            </div>
            <div class="col-span-3">
              <p class="mb-5">Mon site est lent et j'ai besoin de l'optimiser rapidement pour améliorer mon score <a class="link-pretty" href="https://pagespeed.web.dev/">Google Page Speed</a>.</p>
              <ul class="ml-10 mb-7 list-disc space-y-1">
                <li class="font-bold">0 plugins payant, pas de paiement mensuel</li>
                <li>Optimisation automatique des images</li>
                <li>Mise en cache</li>
                <li>Minification des HTML, CSS et Javascript</li>
                <li>Chargement différé des scripts et images</li>
              </ul>
              <p class="text-4xl mb-7 font-bold tracking-wider">200 €</p>
              <a href="#contact" class="btn">Contacter maintenant</a>
            </div>
          </div>
        </div>
      </section>
      <section class="group">
        <div class="max-w-5xl lg:mx-auto mx-5 mb-20 text-lg mb-20">
          <h2 class="text-2xl sm:text-4xl mb-5 flex items-center mb-8">
            <svg-code class="mr-4 text-indigo-400 group-hover:text-indigo-500 transition-all duration-700" />
            <span>Intégration responsive de maquette</span>
          </h2>
          <div class="sm:grid grid-cols-5 gap-8 md:gap-16">
            <div
              class="col-span-2 max-w-sm mx-3 sm:mx-auto mb-14 px-4 py-5 bg-gray-200 text-gray-800 transform-gpu rotate-1 group-hover:rotate-2 duration-700 shadow-2xl"
            >
              <div class="flex items-center mb-5">
                <div
                  class="mr-2 p-1 bg-white rounded-full transform shadow transform-gpu rotate-6 hover:-rotate-12 transition-all"
                >
                  <img src="~assets/skullmasher.svg" width="50" height="50" />
                </div>
                <div>
                  <p class="">Florian Ledru</p>
                  <p class="text-sm">skullmasher.io</p>
                </div>
              </div>
              <div>
                <h4 class="mb-2">Intégration responsive</h4>
                <div class="max-w-xs mb-5 text-sm space-y-2">
                  <p>Intégration responsive d'une page d'accueil à partir de maquette Figma en HTML, CSS et Javascript</p>
                </div>
                <p class="mr-10 text-right text-2xl font-bold">350 €</p>
              </div>
            </div>
            <div class="col-span-3">
              <p class="mb-5">Intégration responsive mobile first de maquettes pour votre événement, campagne email ou une page de votre site web. Compris avec des animations qui font <span class="inline-block animate-skew font-bold text-xl">WOOOOOOOSH</span> et Pixel Perfect si vous le souhaitez.</p>
              <ul class="ml-10 mb-5 list-disc space-y-1">
                <li>Email</li>
                <li>Javascript, React, Vue, Next.js, Nuxt</li>
                <li>PHP, Wordpress, Laravel, Symphony, Slim</li>
              </ul>
              <p class="text-4xl mb-5">À partir 350 €</p>
              <a href="#contact" class="btn">Demander un devis</a>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="group pt-20 pb-20 text-lg bg-indigo-200 dark:bg-elegiac-dark clippath-contactbloc">
        <div class="mx-5">
          <div class="max-w-5xl mx-auto">
            <h2 class="mb-10 text-3xl">
              Demander un devis gratuit !
            </h2>
            <div class="lg:flex gap-12">
              <MainQuoteNow />
              <MainContactForm />
            </div>
            <p class="text-sm max-w-lg">Votre mail ne sera pas utilisé à des fins promotionnel. En vue de notre collaboration j'enregistre votre contact pour communiquer plus facilement. Envoyez-moi un message pour effectuer une suppression.</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import SvgLightning from "~/assets/img/lightning.svg?inline";
import SvgCode from "~/assets/img/code.svg?inline";

export default Vue.extend({
  components: { SvgLightning, SvgCode },
  data() {
    return {
      title: 'Services et prestations',
      formSubject: '',
    }
  },
  head() {
    return {
      title: this.title,
      titleTemplate: '%s - Florian Ledru',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Liste des services et prestations de Florian Ledru, le freelance full-stack aux services des PME, Agence Web, Startup.'
        }
      ]
    }
  }
})
</script>
