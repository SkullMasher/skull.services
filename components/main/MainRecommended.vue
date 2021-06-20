<template>
  <div class="mb-20 text-lg xl:text-xl pt-20 pb-20 clippath-recommendation bg-indigo-200 dark:bg-elegiac-dark">
    <h2 class="text-3xl mx-5 mb-12 text-left lg:text-center font-light">
      Recommander par les entreprises locales et les agences web
    </h2>
    <div class="max-w-screen-2xl mx-5 xl:mx-10 2xl:mx-auto pb-10 grid grid-flow-col grid-cols-recommendation gap-5 xl:gap-10 2xl:gap-20 overflow-x-auto overscroll-x-contain scroll-snap-x-proximity">
      <div>
        <p class="mb-5 scroll-snap-align-start">
          Florian est très réactif et très disponible. Notre entreprise fait
          systématiquement appel à ses services qualifiés ! Il fait partie de notre
          équipe.
        </p>
        <div>
          <p class="text-2xl font-light italic">Stéphane Médina</p>
          <p class="mb-1">
            <a class="link-pretty" href="https://infinitygraphic.fr" target="_blank">
              Infinity Graphic
            </a>
          </p>
          <p class="text-sm w-40">
            Agence web
            à Gaillac dans le Tarn
          </p>
        </div>
      </div>
      <div>
        <p class="mb-5 scroll-snap-align-start">
          5 ans d'échanges, de corrections, d'évolutions, de propositions pertinentes, au service de ma vitrine. Il reste en veille, débloque les situations compliquées et urgente afin que tous fonctionne parfaitement. Flo est mon partenaire... Merci beaucoup pour ton dévouement.
        </p>
        <div>
          <p class="text-2xl font-light italic">Sebastien Philippe</p>
          <p class="mb-1">
            <a class="link-pretty" href="https://www.sebservicesauto.fr/" target="_blank">
              Seb Services Auto
            </a>
          </p>
          <p class="text-sm w-40">
            Mécanicien automobile à domicile
            à Voiron en Isère
          </p>
        </div>
      </div>
      <div>
        <p class="mb-5 scroll-snap-align-start">
          Toujours un plaisir de travailler avec Florian avec qui tout devient possible&nbsp;! Efficace et professionnel, à l’écoute de toutes les demandes, Florian cerne parfaitement vos besoins et contraintes et planche pour vous apporter des solutions.
        </p>
        <div>
          <p class="text-2xl font-light italic">Yohan Antoine</p>
          <p class="mb-1">
            <a class="link-pretty" href="https://infinitygraphic.fr" target="_blank">
              Auzars
            </a>
          </p>
          <p class="text-sm w-40">
            Vente et encadrement de photo en ligne
            à Vannes dans le Morbihan
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import ArrowRight from "~/static/img/arrow-right.svg?inline";

export default Vue.extend({
  components: { ArrowRight },
})
</script>
