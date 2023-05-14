<template>
  <div>
    <button
      v-show="$colorMode.value === 'dark'"
      class="bg-transparent"
      @click="$colorMode.preference = 'light'"
    >
      <SvgoSun class="w-8 sm:w-10 inline-block cursor-pointer transform transition duration-500 hover:rotate-180 sun-shine" />
    </button>
    <button
      v-show="$colorMode.value === 'light'"
      class="bg-transparent"
      @click="$colorMode.preference = 'dark'"
    >
      <SvgoMoon class="w-8 sm:w-10 inline-block cursor-pointer transform transition duration-500 hover:rotate-45 moon-shine" />
    </button>
  </div>
</template>

<style>
.sun-shine {
    filter: drop-shadow(0 0px 6px rgb(191, 168, 48));
  }

  .sun-shine:hover {
    filter: drop-shadow(0 0px 11px rgb(191, 168, 48));
  }

  .moon-shine {
    filter: drop-shadow(0 0px 5px hsla(272.5, 59.6%, 19.4%, 0.7));
  }

  .moon-shine:hover {
    filter: drop-shadow(0 0px 11px hsla(272.5, 59.6%, 19.4%, 0.7));
  }
</style>
