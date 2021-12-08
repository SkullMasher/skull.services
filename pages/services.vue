<template>
  <div class="flow-root bg-indigo-100 text-gray-800 dark:bg-elegiac dark:text-gray-200 transition duration-500">
    <Header title="<strong>Services</strong> et <strong>prestations</strong>" />
    <main>
      <section class="group mb-20 px-5">
        <div class="max-w-5xl mx-auto text-lg">
          <div class="flex items-center mb-8">
            <div class="mr-4">
              <svg-responsive class="group-hover:scale-110 transition-all duration-700 transform-gpu" />
            </div>
            <h2 class="text-2xl sm:text-4xl">Créer un site performant visible et fonctionnel</h2>
          </div>
          <div class="sm:grid grid-cols-5 gap-8 md:gap-16">
            <MainQuoteNow
              class="col-span-2 rotate-2 group-hover:-rotate-1 transform transition-transform duration-700"
              title="Site vitrine complet"
              :items="[
                'Site vitrine 3 pages performant avec Wordpress',
                'Visibilité sur Google Maps avec figuration des horaires',
                'Formation 1h : comment manipuler son site web'
              ]"
              price="1500 €"
            />
            <div class="col-span-3">
              <p>Un site web est un commercial qui ne dort jamais.</p>
              <p class="mb-5">Posséder un site avec des informations clairement présentées est important pour avoir des clients déjà informés avant de vous appeler. De plus, il faut être visible de Google ou des autres moteurs de recherches.</p>
              <ul class="ml-10 mb-7 list-disc space-y-1">
                <li><strong>Vente en ligne</strong> (e-commerce) ou <strong>site vitrine</strong></li>
                <li>Ajout de vos informations sur Google</li>
                <li>Référencement local</li>
                <li>Site rapide et agréable</li>
              </ul>
              <p class="text-4xl mb-7 font-bold tracking-wider">À partir de 1500 €</p>
              <a
                href="#contact"
                class="btn"
                @click="setForm(
                  'Site vitrine complet',
                  'Demande de réalisation de site web',
                  'Site vitrine complet',
                  ['Site vitrine Wordpress', 'Référencement local SEO', 'Formation de 1h l\'utilisation de mon site'],
                  '1500 €',
                )"
              >
                  Demander un devis
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="group mb-20 px-5">
        <div class="max-w-5xl mx-auto text-lg">
          <div class="flex items-center mb-8">
            <div class="mr-4">
              <svg-apppro class="text-purple-500 group-hover:text-pink-500 group-hover:scale-110 transition-all duration-700 transform-gpu" />
            </div>
            <h2 class="text-2xl sm:text-4xl">Application et programme sur mesure</h2>
          </div>
          <div class="sm:grid grid-cols-5 gap-8 md:gap-16">
            <MainQuoteNow
              class="col-span-2 -rotate-1 group-hover:-rotate-3 transform transition-transform duration-700"
              title="Automatiser l'envoi d'un rapport"
              :items="[
                'Interface de gestion des documents',
                'Importation des fichiers Excel',
                'Transformation et édition facile',
                'Téléchargement du document au format PDF',
              ]"
              price="2700 €"
            />
            <div class="col-span-3">
              <p>Et si vous automatisiez une tache redondante de votre quotidien ?</p>
              <p class="mb-5">Transformation et génération de document automatique sur téléphone, tablette et ordinateur.</p>
              <ul class="ml-10 mb-7 list-disc space-y-1">
                <li>Gestion des utlisateurs</li>
                <li>Affichage et changement des données à partir de template</li>
                <li>Importation et exportation PDF, Excel, Word</li>
                <li>Envoi automatique d'email</li>
                <li>Sauvegarde et stockage</li>
                <li>Fonctionnement hors ligne</li>
              </ul>
              <p class="text-4xl mb-7 font-bold tracking-wider">À partir de 2700 €</p>
              <a
                href="#contact"
                class="btn"
                @click="setForm(
                  'Appplication sur mesure',
                  'Demande de conception d\'application sur mesure',
                  'Automatiser l\'envoie d\'un rapport',
                  ['Portail d\'administration des documents', 'Editions des documents après importation', 'Génération automatique au format PDF'],
                  '2700 €',
                )"
              >
                  Demander un devis
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="group mb-20 px-5">
        <div class="max-w-5xl mx-auto text-lg">
          <div class="flex items-center mb-8">
            <div class="mr-4">
              <svg-lightning class="rotate-12 group-hover:rotate-45 text-green-500 sm:text-yellow-500 group-hover:text-green-500 transition-all duration-700" />
            </div>
            <h2 class="text-2xl sm:text-4xl">Performance Wordpress</h2>
          </div>
          <div class="sm:grid grid-cols-5 gap-8 md:gap-16">
            <MainQuoteNow
              class="col-span-2 -rotate-2 group-hover:-rotate-1 transform transition-transform duration-700"
              title="Performance Wordpress"
              :items="[
                'Installer et configurer un cache',
                'Réduire et concaténer les Javascript, CSS, HTML',
                'Optimiser automatiquement les images',
                'Précharger les fichiers de police',
              ]"
              price="200 €"
            />
            <div class="col-span-3">
              <p class="mb-5">Votre site est lent et vous avez  besoin de l'optimiser rapidement pour améliorer votre score <a class="link-pretty" href="https://pagespeed.web.dev/">Google Page Speed</a>.</p>
              <ul class="ml-10 mb-7 list-disc space-y-1">
                <li class="font-bold">0 plugins payant, pas de paiement mensuel</li>
                <li>Optimisation automatique des images</li>
                <li>Mise en cache</li>
                <li>Minification des HTML, CSS et Javascript</li>
                <li>Chargement différé des scripts et images</li>
              </ul>
              <p class="text-4xl mb-7 font-bold tracking-wider">200 €</p>
              <a
                href="#contact"
                class="btn"
                @click="setForm(
                  'Performances Wordpress',
                  'Demande d\'amélioration des performances Wordpress',
                  'Performance Wordpress',
                  ['Caching, minification et optimisation'],
                  '200 €',
                )"
              >
                  Demander un devis
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="group mb-20 px-5">
        <div class="max-w-5xl mx-auto text-lg">
          <div class="flex items-center mb-8">
            <svg-code class="mr-4 text-indigo-400 group-hover:text-indigo-500 transition-all duration-700" />
            <h2 class="text-2xl sm:text-4xl">Développement responsive de votre maquette</h2>
          </div>
          <div class="sm:grid grid-cols-5 gap-8 md:gap-16">
            <MainQuoteNow
              class="col-span-2 rotate-1 group-hover:rotate-2 transform transition-transform duration-700"
              title="Intégration responsive"
              :items="[
                'Intégration responsive d\'une page d\'accueil à partir de maquette Figma en HTML, CSS et Javascript'
              ]"
              price="350 €"
            />
            <div class="col-span-3">
              <p class="mb-5">Intégration responsive mobile first de maquettes pour votre événement, campagne email ou une page de votre site web. Compris avec des animations qui font <span class="inline-block animate-skew font-bold text-xl">WOOOOOOOSH</span> et Pixel Perfect si vous le souhaitez.</p>
              <ul class="ml-10 mb-5 list-disc space-y-1">
                <li>Email</li>
                <li>Javascript, React, Vue, Next.js, Nuxt</li>
                <li>PHP, Wordpress, Laravel, Symphony, Slim</li>
              </ul>
              <p class="text-4xl mb-5">À partir de 350 €</p>
              <a
                href="#contact"
                class="btn"
                @click="setForm(
                  'Developement maquette',
                  'Demande de developement à partir d\'une maquette',
                  'Developement maquette',
                  ['Intégration responsive d\'une page d\'accueil à partir de maquette Figma en HTML, CSS et Javascript'],
                  '350 €',
                )"
              >
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="group pt-20 pb-20 text-lg bg-indigo-200 dark:bg-elegiac-dark clippath-contactbloc">
        <div class="mx-5">
          <div class="max-w-5xl mx-auto">
            <h2 class="mb-10 text-3xl">
              {{ formTitle }}
            </h2>
            <div class="lg:flex gap-12">
              <MainQuoteNow
                class="col-span-2 -rotate-1 group-hover:rotate-1 transform transition-transform duration-700"
                :title="quoteTitle"
                :items="quoteItems"
                :price="quotePrice"
              />
              <MainContactForm :subject="formSubject" />
            </div>
            <p class="text-sm max-w-lg">Votre mail ne sera pas utilisé à des fins promotionnelles. En vue de notre collaboration j'enregistre votre contact pour communiquer plus facilement. Envoyez-moi un message pour effectuer une suppression.</p>
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
import SvgResponsive from "~/assets/img/responsive.svg?inline";
import SvgApppro from "~/assets/img/apppro.svg?inline";

export default Vue.extend({
  components: { SvgLightning, SvgCode, SvgResponsive, SvgApppro },
  data() {
    return {
      formTitle: 'Demander un devis gratuit !',
      title: 'Services et prestations',
      formSubject: '',
      quoteTitle: 'Intervention urgente Wordpress',
      quoteItems: ['Désactivation d\'un plugin qui empêche le chargement du site.'],
      quotePrice: '50 €',
    }
  },
  methods: {
    setForm: function (subject, title, qtitle, qitems, qprice) {
      this.formSubject = subject
      this.formTitle = title
      this.quoteTitle = qtitle
      this.quoteItems = qitems
      this.quotePrice = qprice
    },
  },
  head() {
    return {
      title: this.title,
      titleTemplate: '%s - Florian Ledru',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Sites web et applications simple et ergonomique pour votre société. Je suis également disponible pour votre agence web."
        },
        { hid: 'og:url', name: 'og:url', content: 'https://skullmasher.io/services' },
        { hid: 'og:title', name: 'og:title', content: 'Services et prestations - Florian Ledru' },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            "Sites web et applications simple et ergonomique pour votre société. Je suis également disponible pour votre agence web.",
        },
        { hid: 'twitter:url', property: 'twitter:url', content: 'https://skullmasher.io/services' },
        { hid: 'twitter:title', property: 'twitter:title', content: 'Services et prestations - Florian Ledru' },
        { hid: 'twitter:description', property: 'twitter:description', content: "Sites web et applications simple et ergonomique pour votre société. Je suis également disponible pour votre agence web." },
      ]
    }
  }
})
</script>
