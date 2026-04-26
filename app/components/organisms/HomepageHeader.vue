<template>
  <header class="grid grid-rows-3 h-[max(666px,90vh)] relative overflow-hidden">
    <div class="-z-10 absolute right-0 top-0 bottom-[60%] left-0 bg-linear-to-b from-base-300 to-base-100" />
    <div class="absolute bottom-0 -left-5">
      <SvgAngineDePoitrinePhones class="w-48 text-base-300" :font-controlled="false" />
    </div>
    <div class="absolute bottom-0 -right-5">
      <SvgAngineDePoitrinePhones class="w-48 text-base-300 rotate-180" :font-controlled="false" />
    </div>
    <div class="flex justify-center items-center relative text-4xl">
      <Icon name="solar:planet-broken" class="absolute top-[30%] left-[7%] text-warning" />
      <Icon name="solar:star-ring-broken" class="absolute top-[50%] right-[8%] text-warning" />
      <Icon name="solar:star-angle-broken" class="absolute top-[27%] right-[25%] text-6xl text-warning" />
      <Icon name="solar:star-fall-minimalistic-broken" class="absolute bottom-[30%] left-[14%] -rotate-90 text-warning" />
      <Icon name="solar:star-rings-broken" class="absolute bottom-[14%] right-[23%] text-warning" />
      <Icon name="solar:rocket-2-broken" class="-rotate-45 top-10 text-6xl text-warning relative" />
    </div>
    <div>
      <h1 class="text-center text-4xl font-permanent-marker inline-flex flex-col justify-around items-center w-full h-full">
        <span>Le dévelopeur</span>
        <span class="inline-block relative">
          <Icon name="solar:bolt-broken" class="absolute -top-4.5 -left-6 text-warning -z-10 rotate-12" />
          <span class="text-7xl uppercase font-metal-mania text-error">rockstar</span>
          <Icon name="solar:crown-star-broken" class="absolute -top-2 -right-2 text-warning rotate-32 text-2xl" />
        </span>
        <span>qui va te rendre</span>
        <span class="text-6xl uppercase text-primary">COOL</span>
      </h1>
    </div>
    <div class="flex justify-center items-center">
      <Icon name="solar:double-alt-arrow-down-broken" class="text-primary text-6xl relative -top-9" />
    </div>
  </header>
</template>
