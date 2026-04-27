<template>
  <div id="about" class="flex flex-col md:flex-row justify-center items-center">
    <div class="max-w-sm mx-2 w-full h-104 flex justify-center items-center relative">
      <img class="absolute -z-10 shadow-lg/50 w-42 top-0 left-5 -rotate-6" src="/florian-ledru-skate-1.avif" alt="Florian Ledru souriant sur un skate éffectuant un virage a gauche">
      <img class="absolute -z-10 shadow-lg/50 w-42 top-0 right-5 rotate-2" src="/florian-ledru-skate-2.avif" alt="Florian Ledru souriant sur un skate éffectuant un virage a droite">
      <img class="absolute -z-10 shadow-lg/50 w-42 bottom-0 -rotate-6" src="/florian-ledru-skate-3.avif" alt="Florian Ledru souriant les cheveux aux vents">
      <SvgSkullmasher
        class="size-18 transition-transform duration-300 rotate-14 relative -top-6"
        :font-controlled="false" filled
      />
    </div>
    <NuxtLink to="#contact" class="hover-3d mx-2 cursor-pointer">
      <div class="card w-96 bg-base-200">
        <div class="card-body">
          <h2 class="card-title">
            Florian Ledru
          </h2>
          <div class="flex flex-col gap-y-4">
            <p>14 ans d'éxpériance a réduire et simplifier les coûts informatiques des PME</p>
            <p>Vue.js • Wordpress • Odoo</p>
            <div class="flex gap-x-3 items-center">
              <Icon class="text-4xl text-primary" name="solar:map-point-wave-broken" />
              <p>Basé a Nancy</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 8 empty divs needed for the 3D effect -->
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </NuxtLink>
  </div>
</template>
