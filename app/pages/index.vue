<template>
  <div>
    <Navbar />
    <div class="my-8">
      <header class="relative mx-auto px-2 pb-86 max-w-xl border-b-primary-content">
        <h1 class="text-4xl mb-4 font-semibold">
          Réduire les coûts informatiques de votre
          <abbr class="text-primary" title="Petites et moyennes entreprises">PME</abbr>
        </h1>
        <h2 class="text-2xl mb-2">
          Florian Ledru
        </h2>
        <h2>Développement • Hébergement • Design</h2>
        <NuxtPicture src="/florian-ledru-dev-2026.avif" format="avif, webp" width="300"
          alt="Florian Ledru détouré avec la main sur le sur le matin" class="absolute bottom-0 right-0 -z-10" />
      </header>
      <main class="mx-auto px-2 max-w-3xl">
        <ContactForm />
      </main>
    </div>
  </div>
</template>
