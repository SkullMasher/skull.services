<template>
  <div class="max-w-sm w-full h-104 flex justify-center items-center relative">
    <div class="absolute inset-0 sm:-inset-10 sm:-inset-x-32 md:-inset-x-90 bg-radial-[at_70%_30%] sm:bg-radial-[at_60%_60%] from-accent/75 sm:from-accent/60 md:from-accent/50 to-base-100 -z-10 md:rounded-full blur-3xl" />
    <img class="absolute -z-10 shadow-lg/50 w-42 top-0 left-5 -rotate-6" src="/florian-ledru-skate-1.avif" alt="Florian Ledru souriant sur un skate éffectuant un virage a gauche">
    <img class="absolute -z-10 shadow-lg/50 w-42 top-0 right-5 rotate-2" src="/florian-ledru-skate-2.avif" alt="Florian Ledru souriant sur un skate éffectuant un virage a droite">
    <img class="absolute -z-10 shadow-lg/50 w-42 bottom-0 -rotate-6" src="/florian-ledru-skate-3.avif" alt="Florian Ledru souriant les cheveux aux vents">
    <SvgSkullmasher
      class="size-18 transition-transform duration-300 rotate-12 relative -top-6 drop-shadow-xl"
      :font-controlled="false" filled
    />
  </div>
</template>
