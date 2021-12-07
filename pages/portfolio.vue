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
      <section>
        <div class="max-w-4xl mx-auto">
          <div class="flex justify-center mb-4">
            <button class="badge--active">
              Tous les projets
            </button>
          </div>
          <div class="flex gap-4 flex-wrap justify-between">
            <button class="badge--outline">
              wordpress
            </button>
            <button class="badge--outline">
              Vue
            </button>
            <button class="badge--outline">
              React
            </button>
            <button class="badge--outline">
              design
            </button>
            <button class="badge--outline">
              e-commerce
            </button>
            <button class="badge--outline">
              appplication sur mesure
            </button>
            <button class="badge--outline">
              référencement SEO
            </button>
            <button class="badge--outline">
              administration système
            </button>
          </div>
        </div>
      </section>
      <section>
        <h2>Auzars</h2>
        <h3>Vendre en ligne les produits d'une entreprise local</h3>
        <div><span>wordpress</span> <span>woocommerce</span> <span>SEO</span> <span>performance</span> <span>UX</span> <span>UI</span></div>
        <p>Design sur mesure pour simplifier l'achat et la personalisation des produits. Booster la vitesse des pages et le référencement.</p>
      </section>
      <section>
        <h2>Infinity Graphic</h2>
        <h3>Répondre au besoin d'une agence web</h3>
        <div><span>wordpress</span> <span>woocommerce</span> <span>performance</span> <span>administration système</span> <span>performance</span> <span>réparation après piratage</span> <span>sécurité</span></div>
        <p>Résoudre les bugs sur une sur une centaine de site, sécurisé des sites pirater.</p>
      </section>
      <section>
        <h2>Eden Lutherie</h2>
        <h3>Changement complet du système de comptabilité</h3>
        <div><span>comptabilité</span></div>
        <p>Coincé avec une solution de comptabilité propriétaire, nous avons transférer la comptabilité vers un système open-source moderne et évolutif.</p>
      </section>
      <section>
        <h2>Heartless Gaming</h2>
        <h3>10ans de jeux vidéo en communauté</h3>
        <div><span>serveurs de jeux</span> <span>donation</span> <span>Vue</span> <span>Nuxt</span> <span>Redis</span> <span>API</span> <span>performance</span> <span>sécurité</span> <span>youtube</span> <span>twitch</span></div>
        <p>Fatigué de ne pas trouver des serveurs de jeux et un espace de communication, un groupe de gamer ce décide de se lancer dans l'aventure de l'auto hébergement.</p>
      </section>
      <section>
        <h2>Seb Services Auto</h2>
        <h3>Rendre une entreprise local visible face à la concurence</h3>
        <div><span>site complet</span> <span>wordpress</span> <span>SEO</span> <span>performance</span> <span>design</span> <span>hébergement</span> <span>mail</span></div>
        <p>Site vitrine complet assurant une très bonne présance en ligne, face à la concurance. Fort taux de conversion sous la forme d'apell téléphonique, grace à un référencement localisé à la zone d'activité définie de l'entreprise.</p>
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
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
