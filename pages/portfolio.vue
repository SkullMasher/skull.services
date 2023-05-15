<script>
// const title = ref('Portfolio, création et référence')
// export default Vue.extend({
//   head() {
//     return {
//       title: this.title,
//       titleTemplate: '%s - Florian Ledru',
//       meta: [
//         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//         {
//           hid: 'description',
//           name: 'description',
//           content:
//             'Portfolio d\'un freelance full stack affichant des prestations de design UI/UX, Wordpress, React, Vue, référencement SEO, administration système.',
//         },
//         { hid: 'og:url', name: 'og:url', content: 'https://skullmasher.io/portfolio' },
//         { hid: 'og:title', name: 'og:title', content: 'Portfolio d\'un freelance full stack - Florian Ledru' },
//         {
//           hid: 'og:description',
//           name: 'og:description',
//           content:
//             'Portfolio d\'un freelance full stack affichant des prestations de design UI/UX, Wordpress, React, Vue, référencement SEO, administration système.',
//         },
//         { hid: 'twitter:url', property: 'twitter:url', content: 'https://skullmasher.io/portfolio' },
//         { hid: 'twitter:title', property: 'twitter:title', content: 'Portfolio d\'un freelance full stack - Florian Ledru' },
//         { hid: 'twitter:description', property: 'twitter:description', content: 'Portfolio d\'un freelance full stack affichant des prestations de design UI/UX, Wordpress, React, Vue, référencement SEO, administration système.' },
//       ],
//     }
//   },
// })
</script>

<template>
  <Header>
    <HeaderPageTitle title="<strong>Portfolio</strong>, création & référence" />
  </Header>
  <main>
    <MainProject
      name="Mon Panier du marché"
      title="Groupe Dadoun / Mon panier du marché - Moderniser les marchés"
      :tags="['E-commerce', 'Vue Nuxt 2/3', 'React NextJS', 'Offline First', 'Design UI/UX']"
      logo="/img/logo-mon-panier-du-marche.svg"
      logo-width="300"
      logo-height="85"
      url="https://www.monpanierdumarche.com/"
    >
      <p>Mission de plusieurs mois chez le Groupe Dadoun où nous avons mis en ligne l'application Mon Panier du marché pour acheter les produits du marché en ligne et dynamiser les marché de semaine.</p>
      <p>Nous avons aussi développé une solution offline first en React pour une application interne.</p>
      <p>Le Groupe Dadoun utilise toutes mes compétences et me challenge sur des problématiques réel et intéressante.</p>
      <p>Mon expérience au sein de ce groupe à taille humaine est légendaire et je remercie encore toutes celles et ceux que je rencontre dans les locaux pour l'accueil chaleureux et les moyens qui sont mis à ma disposition pour faire le meilleur travail possible.</p>

    </MainProject>
    <MainProject
      name="Ambiance Lumière"
      title="Ambiance Lumière - Reprendre le controle sur sa présence en ligne"
      :tags="['Wordpress', 'Référencement SEO', 'Consultant', 'Formation']"
      logo="/img/logo-ambiance-lumiere.png"
      logo-width="300"
      logo-height="103"
      url="https://www.ambiance-lumiere.com/"
    >
      <p>Reprise de l'activité en ligne suite à la version précédente du site qui était hacké. Après récupération du site, nous l'avons réinstallé sur la structure OVH. Nous avons ensuite formé et sensibilisé le personnel à l'utilisation site et à sa maintenance basique.</p>
      <p>Ils ne sont plus verrouillés chez un seul prestataire et ont une meilleure capacité de réponse en cas de problème. De plus, ils ont maintenant un consultant à disposition pour imaginer la suite de leur projets web.</p>
    </MainProject>
    <MainProject
      name="Auzars"
      title="Auzars - Vendre en ligne les produits d'une entreprise locale"
      :tags="['wordpress', 'e-commerce', 'référencement SEO', 'design UI/UX']"
      logo="/img/logo-auzars-site-noir.webp"
      logo-width="180"
      logo-height="49"
      url="https://www.auzars.com/"
    >
      <p>Transformation du thème original Wordpress pour simplifier l'achat et la personnalisation des produits. Présentation claire des options disponibles pour changer le produit en fonction de sa dimension ou du cadre choisi par l'utilisateur.</p>
      <p>Depuis le début de notre collaboration, l'ensemble des mesures prises a permis de réussir la transition d'une entreprise locale vers la vente en ligne, qui représente maintenant une partie du chiffre d'affaire mensuel.</p>
    </MainProject>
    <MainProject
      name="Infinity Graphic"
      title="Infinity Graphic - Répondre aux besoins d'une agence web"
      :tags="['wordpress', 'e-commerce', 'administration système']"
      logo="/img/logo-infinity-graphic.png"
      logo-width="300"
      logo-height="103"
      url="https://infinitygraphic.fr/"
    >
      <p>Mon profil complète parfaitement les compétences de l'agence pour corriger les bugs les plus tenaces et améliorer la sécurité des sites.</p>
      <p>Mes compétences variées, du design jusqu'au serveur me permettent d'intervenir rapidement sur toute la chaîne qui constitue les problèmes de votre agence web avec ses projets informatiques.</p>
      <p>Venant également d'une agence web, je peux guider votre agence à faire les bons choix technologiques en fonction des besoins et rester rentable dans vos coûts de développement.</p>
    </MainProject>
    <MainProject
      name="Heartless Gaming"
      title="Heartless Gaming - Apprentissage par la passion"
      :tags="['design UI/UX', 'Vue', 'administration système']"
      logo="/img/logo-heartless-gaming.png"
      logo-width="300"
      logo-height="104"
      url="https://heartlessgaming.com/"
    >
      <p>Fatigué de ne pas trouver de serveurs de jeux et un espace de communication, un groupe de gamers décide de se lancer dans l'aventure de l'auto-hébergement.</p>
      <p>Heartless Gaming est mon projet de coeur. A travers ce projet j'ai appris l'administration système, la gestion d'une communauté en ligne.</p>
      <p>Toutes les compétences apprises sur ce projet sont mises à profit au travers de ma société.</p>
      <p>Ce site web prend en charge les donations à travers <a href="https://stripe.com" class="link-pretty" target="_blank">Stripe</a>, affiche le nombre de joueurs en ligne grace <a href="https://github.com/heartless-gaming/heartlessgaming.com">un système complètement maison</a>.</p>
    </MainProject>
    <MainProject
      name="Seb Services Auto"
      title="Seb Services Auto - Démarrer sa société avec la bonne visibilité"
      :tags="['design UI/UX', 'wordpress', 'référencement SEO']"
      logo="/img/logo-seb-services-auto.png"
      logo-width="300"
      logo-height="100"
      url="https://www.sebservicesauto.fr/"
    >
      <p>Site vitrine complet assurant une très bonne présence en ligne, face à la concurrence. Peu de visites mais un très fort taux de conversion sous la forme d'appels téléphoniques, grace à un référencement localisé sur la zone d'activité de l'entreprise.</p>
      <p>Le site web de Seb et son référencement sur Google Maps lui apporte un flux constant de nouveaux clients très rapidement fidélisés et heureux de trouver une alternative aux garages automobiles classiques.</p>
    </MainProject>
    <MainContact />
  </main>
  <Footer />
</template>
