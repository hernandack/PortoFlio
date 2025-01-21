<script setup lang="ts">
import SectionOverlay from '../editors/SectionOverlay.vue'
import { usePortfolioStore } from '@/stores/portfolio'
import { onMounted } from 'vue'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import * as eva from 'eva-icons'
import type { TTestimonial } from '@/types/Section'

defineProps<{
  sectionId?: string
  heading?: string
  caption?: string
  testimonials: TTestimonial[]
}>()

const emit = defineEmits(['on-edit-section'])
const handleEditSection = () => {
  if (usePortfolioStore().isEditing) {
    emit('on-edit-section')
  }
}

onMounted(() => {
  eva.replace()
})

const testimonialConfig = {
  perMove: 1,
  itemsToShow: 3.5,
  autoplay: 10000,
  gap: 10,
  pagination: true,
  navigation: true,
  wrapAround: false,
}
</script>

<template>
  <section
    :id="sectionId"
    class="bg-gray-200 p-4 w-full flex flex-col gap-5 relative z-[1]"
    @click="handleEditSection"
  >
    <h2 v-if="heading" class="text-xl font-semibold">{{ heading }}</h2>
    <p v-if="caption" class="text-gray-500">{{ caption }}</p>

    <Carousel v-if="testimonials.length" v-bind="testimonialConfig">
      <Slide v-for="testi in testimonials" :key="testi.id" class="flex flex-col items-center p-10">
        <img v-if="testi.image" :src="testi.image" class="text-gray-500 mb-4" />
        <h3 v-if="testi.name" class="text-lg font-semibold">{{ testi.name }}</h3>
        <p v-if="testi.role" class="text-gray-500">{{ testi.role }}</p>
        <p v-if="testi.content" class="text-gray-500">{{ testi.content }}</p>
        <div v-if="testi.rating" class="text-gray-500 mt-2 flex gap-1 items-center">
          <span v-for="i in 5" :key="i">
            <i
              v-if="i <= testi.rating"
              data-eva="star"
              data-eva-height="24"
              data-eva-width="24"
              data-eva-fill="#f1c40f"
            ></i>
            <i v-else data-eva="star" data-eva-height="24" data-eva-width="24"></i>
          </span>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </Carousel>

    <SectionOverlay target="testimonials" />
  </section>
</template>
