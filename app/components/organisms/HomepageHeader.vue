<template>
  <header class="relative mx-auto px-2 pb-106 sm:pb-86 sm:pt-12 border-b-primary-content overflow-hidden">
    <div class="max-w-xl mx-auto">
      <h1 class="text-4xl mb-4 font-semibold text-shadow-md/50">
        Réduire et simplifier les coûts informatiques des
        <abbr class="" title="Petites et moyennes entreprises">PME</abbr>
      </h1>
      <h2 class="text-2xl mb-2 text-primary text-shadow-md/50 font-semibold">
        Florian Ledru
      </h2>
      <h2 class="text-shadow-md/85">
        Développement • Hébergement • Design
      </h2>
    </div>
    <div class="size-120 absolute bottom-10 -right-20 -z-10 text-secondary blur-2xl">
      <SvgBlob2 :font-controlled="false" class="" />
    </div>
    <div class="size-86 text-accent absolute bottom-0 right-40 -z-10 blur-3xl">
      <SvgBlob :font-controlled="false" class="" />
    </div>
    <NuxtPicture
      src="/florian-ledru-dev-2026.avif"
      format="avif, webp"
      width="300"
      alt="Florian Ledru détouré avec la main sur le sur le matin"
      class="absolute bottom-0 right-2 -z-10"
    />
  </header>
</template>
