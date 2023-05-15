<script setup>
const formTitle = ref('Demander un devis gratuit !')
const formSubject = ref('topkek')
const quoteTitle = ref('Intervention urgente Wordpress')
const quoteItems = ref(['Désactivation d\'un plugin qui empêche le chargement du site.'])

function setForm(subject, title, qtitle, qitems) {
  console.log([subject, title, qtitle, qitems])
  formSubject.value(subject)
  formTitle.value(title)
  quoteTitle.value(qtitle)
  quoteItems.value(qitems)
}

/* head() {
    return {
      title: this.title,
      titleTemplate: '%s - Florian Ledru',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Sites web et applications simple et ergonomique pour votre société. Je suis également disponible pour votre agence web.',
        },
        { hid: 'og:url', name: 'og:url', content: 'https://skullmasher.io/services' },
        { hid: 'og:title', name: 'og:title', content: 'Services et prestations - Florian Ledru' },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Sites web et applications simple et ergonomique pour votre société. Je suis également disponible pour votre agence web.',
        },
        { hid: 'twitter:url', property: 'twitter:url', content: 'https://skullmasher.io/services' },
        { hid: 'twitter:title', property: 'twitter:title', content: 'Services et prestations - Florian Ledru' },
        { hid: 'twitter:description', property: 'twitter:description', content: 'Sites web et applications simple et ergonomique pour votre société. Je suis également disponible pour votre agence web.' },
      ],
    }
  }, */
</script>

<template>
  <Header>
    <HeaderPageTitle title="<strong>Services</strong> & <strong>Prestations</strong>" />
  </Header>
  <main>
    <section class="group mb-20 px-5">
      <div class="max-w-5xl mx-auto text-lg">
        <div class="flex gap-4 items-center mb-8">
          <div>
            <SvgoResponsive class="w-16 group-hover:scale-110 transition-all duration-700 transform-gpu drop-shadow" />
          </div>
          <h2 class="text-2xl sm:text-4xl">
            Créer un site performant visible et fonctionnel
          </h2>
        </div>
        <div class="sm:grid grid-cols-5 gap-8 md:gap-16">
          <MainQuoteNow
            class="col-span-2 rotate-2 group-hover:-rotate-1 transform transition-transform duration-700"
            title="Site vitrine complet"
            :items="[
              'Site vitrine 3 pages performant avec Wordpress',
              'Visibilité sur Google Maps avec figuration des horaires',
              'Formation 1h : comment manipuler son site web',
            ]"
          />
          <div class="col-span-3">
            <p>Un site web est un commercial qui ne dort jamais.</p>
            <p class="mb-5">
              Posséder un site avec des informations clairement présentées est important pour avoir des clients déjà informés avant de vous appeler. De plus, il faut être visible de Google ou des autres moteurs de recherches.
            </p>
            <ul class="ml-10 mb-7 list-disc space-y-1">
              <li><strong>Vente en ligne</strong> (e-commerce) ou <strong>site vitrine</strong></li>
              <li>Ajout de vos informations sur Google</li>
              <li>Référencement local</li>
              <li>Site rapide et agréable</li>
              <li>Design sur mesure</li>
              <li>Graphisme</li>
            </ul>
            <a
              href="#contact"
              class="btn"
              @click="setForm(
                'Site vitrine complet',
                'Demande de réalisation de site web',
                'Site vitrine complet',
                ['Site vitrine Wordpress', 'Référencement local SEO', 'Formation de 1h l\'utilisation de mon site'],
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
        <div class="flex gap-4 items-center mb-8">
          <div>
            <SvgoApppro class="w-20 text-purple-500 group-hover:text-pink-500 group-hover:scale-110 transition-all duration-700 transform-gpu drop-shadow" />
          </div>
          <h2 class="text-2xl sm:text-4xl">
            Application et programme sur mesure
          </h2>
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
          />
          <div class="col-span-3">
            <p>Et si vous automatisiez une tache redondante de votre quotidien ?</p>
            <p class="mb-5">
              Transformation et génération de document automatique sur téléphone, tablette et ordinateur.
            </p>
            <ul class="ml-10 mb-7 list-disc space-y-1">
              <li>Gestion des utlisateurs</li>
              <li>Affichage et changement des données à partir de template</li>
              <li>Importation et exportation PDF, Excel, Word</li>
              <li>Envoi automatique d'email</li>
              <li>Sauvegarde et stockage</li>
              <li>Fonctionnement hors ligne</li>
            </ul>
            <a
              href="#contact"
              class="btn"
              @click="setForm(
                'Appplication sur mesure',
                'Demande de conception d\'application sur mesure',
                'Automatiser l\'envoie d\'un rapport',
                ['Portail d\'administration des documents', 'Editions des documents après importation', 'Génération automatique au format PDF'],
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
        <div class="flex gap-4 items-center mb-8">
          <div>
            <SvgoLightning class="w-16 rotate-12 group-hover:rotate-45 text-green-500 sm:text-yellow-500 group-hover:text-green-500 transition-all duration-700 drop-shadow" />
          </div>
          <h2 class="text-2xl sm:text-4xl">
            Performance Wordpress
          </h2>
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
          />
          <div class="col-span-3">
            <p class="mb-5">
              Votre site est lent et vous avez  besoin de l'optimiser rapidement pour améliorer votre score <a class="link-pretty" href="https://pagespeed.web.dev/">Google Page Speed</a>.
            </p>
            <ul class="ml-10 mb-7 list-disc space-y-1">
              <li class="font-bold">
                0 plugins payant, pas de paiement mensuel
              </li>
              <li>Optimisation automatique des images</li>
              <li>Mise en cache</li>
              <li>Minification des HTML, CSS et Javascript</li>
              <li>Chargement différé des scripts et images</li>
            </ul>
            <a
              href="#contact"
              class="btn"
              @click="setForm(
                'Performances Wordpress',
                'Demande d\'amélioration des performances Wordpress',
                'Performance Wordpress',
                [
                  'Installer et configurer un cache',
                  'Réduire et concaténer les Javascript, CSS, HTML',
                  'Optimiser automatiquement les images',
                  'Précharger les fichiers de police',
                ],
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
        <div class="flex gap-4 items-center mb-8">
          <SvgoCode class="w-16 text-indigo-400 group-hover:text-indigo-500 transition-all duration-700 drop-shadow" />
          <h2 class="text-2xl sm:text-4xl">
            Développement responsive de votre maquette
          </h2>
        </div>
        <div class="sm:grid grid-cols-5 gap-8 md:gap-16">
          <MainQuoteNow
            class="col-span-2 rotate-1 group-hover:rotate-2 transform transition-transform duration-700"
            title="Intégration responsive"
            :items="[
              'Intégration responsive d\'une page d\'accueil à partir de maquette Figma en HTML, CSS et Javascript',
            ]"
          />
          <div class="col-span-3">
            <p class="mb-5">
              Intégration responsive mobile first de maquettes pour votre événement, campagne email ou une page de votre site web. Compris avec des animations qui font <span class="inline-block animate-skew font-bold text-xl">WOOOOOOOSH</span> et Pixel Perfect si vous le souhaitez.
            </p>
            <ul class="ml-10 mb-5 list-disc space-y-1">
              <li>Template email responsive</li>
              <li>Reproduction de page à l'identique sans framework</li>
              <li>Intégration React, Vue, Laravel, Symphony etc.</li>
            </ul>
            <a
              href="#contact"
              class="btn"
              @click="setForm(
                'Developement maquette',
                'Demande de developement à partir d\'une maquette',
                'Developement maquette',
                ['Intégration responsive d\'une page d\'accueil à partir de maquette Figma en HTML, CSS et Javascript'],
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
        <div class="flex gap-4 items-center mb-8">
          <SvgoServerSecurity class="w-16 text-indigo-600 group-hover:text-green-500 transition-all duration-700 drop-shadow" />
          <h2 class="text-2xl sm:text-4xl">
            Administration système
          </h2>
        </div>
        <div class="sm:grid grid-cols-5 gap-8 md:gap-16">
          <MainQuoteNow
            class="col-span-2 rotate-1 group-hover:rotate-2 transform transition-transform duration-700"
            title="Installation serveur web Debian"
            :items="[
              'Installation et configuration de Nginx', 'Système de monitoring netdata', 'Configuration pare-feu', 'Protection HTTPS',
            ]"
          />
          <div class="col-span-3">
            <p class="mb-5">
              Vos données sont elle régulièrement sauvegardées ? Un serveur installé dans votre boutique permet d'accéder rapidement à vos factures et vous rend indépendant du cloud tout en réduisant vos coûts fixes mensuels.
            </p>
            <ul class="ml-10 mb-5 list-disc space-y-1">
              <li>Installation complète de serveur pour site web et applications</li>
              <li>Sécurisation HTTPS</li>
              <li>Pare-feu et filtre de spam</li>
              <li class="font-bold">
                Sécurisation, nettoyage et récupération des données
              </li>
            </ul>
            <a
              href="#contact"
              class="btn"
              @click="setForm(
                'Administration système',
                'Installation serveur web Nginx',
                'Installation serveur',
                ['Installation et configuration de Nginx', 'Système de monitoring netdata', 'Configuration pare-feu', 'Protection HTTPS'],
              )"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="group pt-20 pb-20 text-lg bg-indigo-200 dark:bg-elegiac-dark transition duration-500 clippath-contactbloc">
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
            />
            <MainContactForm :subject="formSubject" />
          </div>
          <p class="text-sm max-w-lg">
            Votre mail ne sera pas utilisé à des fins promotionnelles. En vue de notre collaboration j'enregistre votre contact pour communiquer plus facilement. Envoyez-moi un message pour effectuer une suppression.
          </p>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>
