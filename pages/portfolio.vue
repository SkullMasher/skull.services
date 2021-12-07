<!--
  Titre Page - OK
  Trié par badge d'itentification du projet
          Tous les projets
    wordpress, Vue, React, design,
    administration système, e-commerce
    appplication sur mesure, référencement SEO

  Projet
    Photo slider
    Titre
    Description avec les fonctionalité
-->
<template>
  <div class="flow-root bg-indigo-100 text-gray-800 dark:bg-elegiac dark:text-gray-200 transition duration-500">
    <Header title="<strong>Portfolio</strong>, création et référence" />
    <main>
      <section class="mb-20 mx-5 hidden">
        <div class="max-w-4xl mx-auto">
          <div class="flex justify-center mb-4">
            <button class="badge--active">
              Tous les projets
            </button>
          </div>
          <div class="flex gap-4 flex-wrap justify-between">
            <button class="badge--outline">
              Wordpress
            </button>
            <button class="badge--outline">
              Vue
            </button>
            <button class="badge--outline">
              React
            </button>
            <button class="badge--outline">
              Design UI/UX
            </button>
            <button class="badge--outline">
              E-commerce
            </button>
            <button class="badge--outline">
              Appplication sur mesure
            </button>
            <button class="badge--outline">
              Référencement SEO
            </button>
            <button class="badge--outline">
              Administration système
            </button>
          </div>
        </div>
      </section>
      <MainProject
        name="Auzars"
        title="Auzars - Vendre en ligne les produits d'une entreprise local"
        :tags="['wordpress', 'e-commerce', 'référencement SEO', 'design UI/UX']"
        logo="/logo-auzars-site-noir.webp"
        url="https://www.auzars.com/"
      >
        <p>Transformation du thème original Wordpress pour simplifier l'achat et la personalisation des produits. Présentation clair des options disponible pour changer le produit en fonction de sa dimension ou du cadre choisis par l'utilisateur.</p>
        <p>Depuis le début de notre colaboration, l'ensemble des mesures prise ont permis de réussir la transition d'une entreprise local vers la vente en ligne, qui représente maintenant une partie du chifre d'affaire mensuel.</p>
      </MainProject>
      <MainProject
        name="Infinity Graphic"
        title="Infinity Graphic - Répondre au besoin d'une agence web"
        :tags="['wordpress', 'e-commerce', 'administration système']"
        logo="/logo-infinity-graphic.png"
        logoWidth="300"
        logoHeight="103"
        url="https://infinitygraphic.fr/"
      >
        <p>Mon profil compléte parfaitement les compétences de l'agence pour corriger les bugs les plus tenaces et améliorer la sécurité des site.</p>
        <p>Mes compétences varié du design jusqu'au serveur me permettent d'intervenir rapidement sur toute la chaine qui constitue les problèmes de votre agence web avec ses projets informatique.</p>
        <p>Venant également d'une agence web, je peux guider votre agence à faire les bon choix technologique en fonction des besoins et rester rentables dans vos coups de dévelopement.</p>
      </MainProject>
      <MainProject
        name="Heartless Gaming"
        title="Heartless Gaming - Apprentissage par la passion"
        :tags="['design UI/UX','Vue', 'administration système']"
        logo="/logo-heartless-gaming.png"
        logoWidth="300"
        logoHeight="104"
        url="https://heartlessgaming.com/"
      >
        <p>Fatigué de ne pas trouver des serveurs de jeux et un espace de communication, un groupe de gamer ce décide de se lancer dans l'aventure de l'auto hébergement.</p>
        <p>Heartless Gaming est mon projet de coeur. A travers ce projet j'ai appris l'admnistration système, la gestion d'une commnauté en ligne.</p>
        <p>Toute les compétences apprise sur ce projet sont mise à profit au travers de ma société.</p>
        <p>Ce site web prend en charge les donations à travers stripe, affiche le nombre de joueur en ligne grace <a href="https://github.com/heartless-gaming/heartlessgaming.com">un système complétement maison</a>.</p>
      </MainProject>
      <MainProject
        name="Seb Services Auto"
        title="Seb Services Auto - Démarer sa société avec la bonne visibilité"
        :tags="['design UI/UX', 'wordpress', 'référencement SEO']"
        logo="/logo-seb-services-auto.png"
        logoWidth="300"
        logoHeight="104"
        url="https://www.sebservicesauto.fr/"
      >
        <p>Site vitrine complet assurant une très bonne présance en ligne, face à la concurance. Peu de visite mais un fort très fort taux de conversion sous la forme d'apell téléphonique, grace à un référencement localisé sur la zone d'activité de l'entreprise.</p>
        <p>Le site web de seb et son référencement sur Google Maps lui apporte un flu constant de nouveaux client, très rapidement fidélisé et heureux de trouver une alternative aux garages automobile classique.</p>
      </MainProject>
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
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
