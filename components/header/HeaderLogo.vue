<template>
  <nuxtLink
    to="/"
    class="p-1 bg-gray-200 rounded-full transform transform-gpu rotate-12 hover:-rotate-12 hover:scale-105 hover:ring-4 ring-gray-200 ring-opacity-30 transition-all shadow-lg relative order-first"
  >
    <img src="~assets/skullmasher.svg" class="w-10 h-10 sm:w-20 sm:h-20" />
  </nuxtLink>
</template>
<style>
.logo-halo::before {
  content: '';
  position: absolute;
  background-image: radial-gradient(hsla(194, 76%, 54%), rgba(0, 0, 0, 0) 50%);
  top: -10%;
  left: -20px;
  width: 100px;
  height: 100px;
}
</style>
