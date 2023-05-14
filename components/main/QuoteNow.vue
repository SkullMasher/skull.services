<script setup>
defineProps(['title', 'items'])
</script>

<template>
  <div>
    <div
      class="max-w-xs mx-3 xs:mx-auto mb-14 pl-2 pr-2 py-5 bg-gray-200 text-gray-800 shadow-2xl"
    >
      <div class="flex items-center mb-5">
        <div
          class="mr-2 p-1 bg-white rounded-full transform-gpu shadow transform-gpu rotate-6 hover:-rotate-12 transition-transform"
        >
          <SvgoSkullmasher class="w-12 h-12" />
        </div>
        <div>
          <p class="">
            Florian Ledru
          </p>
          <p class="text-sm">
            skullmasher.io
          </p>
        </div>
      </div>
      <div class="ml-5">
        <h4 class="mb-2">
          {{ title || 'Intervention urgente Wordpress' }}
        </h4>
        <div class="mb-5 space-y-2">
          <p v-for="item in items" :key="item.id" class="max-w-xs text-sm">
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
