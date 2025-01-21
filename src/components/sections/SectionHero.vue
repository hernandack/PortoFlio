<script setup lang="ts">
import { usePortfolioStore } from '@/stores/portfolio'
import SectionOverlay from '../editors/SectionOverlay.vue'
import type { THero, TSectionImage, TSectionButton } from '@/types/Section'

defineProps<{
  heading?: string
  caption?: string
  image?: TSectionImage
  button?: TSectionButton
  hero?: THero
}>()

const emit = defineEmits(['on-edit-section'])
const handleEditSection = () => {
  if (usePortfolioStore().isEditing) {
    emit('on-edit-section')
  }
}
</script>

<template>
  <section
    class="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white bg-cover bg-center min-h-[50svh] md:min-h-[80svh] relative"
    :style="`background-image: url(${hero?.bgImage}); background-color: var(--hero-bgcolor); color: var(--hero-color);`"
    @click="handleEditSection"
  >
    <div class="hero__content flex flex-col justify-center p-14 gap-5 text-lg">
      <h3 v-if="heading" class="text-4xl font-semibold" style="color: var(--hero-heading-color)">
        {{ heading }}
      </h3>
      <p v-if="caption" class="text-gray-500 text-xl" style="color: var(--hero-caption-color)">
        {{ caption }}
      </p>
      <a
        v-if="button"
        :href="button.link"
        :target="button.target"
        class="text-white bg-black px-6 py-3 rounded-md max-w-fit"
        style="background-color: var(--hero-button-bgcolor); color: var(--hero-button-color)"
      >
        {{ button.label }}
      </a>
    </div>
    <figure v-if="image" class="relative text-gray-500 bg-gray-700">
      <img :src="image.src" :alt="image.alt" class="absolute inset-0 object-cover w-full h-full" />
    </figure>

    <SectionOverlay target="hero" />
  </section>
</template>
