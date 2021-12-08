<template>
<section class="mb-20 max-w-7xl mx-auto">
  <div class="mx-5">
    <h2 class="mb-5 text-2xl sm:text-4xl">{{title}}</h2>
    <div class="flex gap-4 flex-wrap mb-5">
      <span class="badge--active" v-for="tag in tags" key="tag.id">{{tag}}</span>
    </div>
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-5">
        <div class="text-lg sm:col-span-2 lg:col-span-1 leading-relaxed space-y-3">
          <slot></slot>
        </div>
        <div class="flex flex-col gap-5 justify-center items-center col-span-1">
          <nuxt-picture
            :src="logo"
            class="mb-5 drop-shadow-lg"
            :width="logoWidth"
            :height="logoHeight"
            loading="lazy"
          />
          <a class="btn" :href="url" target="_blank">Visiter {{name}}</a>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: ['name', 'title', 'tags', 'logo', 'logoWidth', 'logoHeight', 'url'],
})
</script>
