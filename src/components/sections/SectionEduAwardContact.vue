<script setup lang="ts">
import { usePortfolioStore } from '@/stores/portfolio'
import SectionAwards from './SectionAwards.vue'
import SectionEducations from './SectionEducations.vue'
import SectionContact from './SectionContact.vue'
import SectionOverlay from '../editors/SectionOverlay.vue'
import type { TAward, TContact, TEducation } from '@/types/Section'

defineProps<{
  sectionId?: string
  heading?: string
  caption?: string
  awards?: TAward[]
  educations?: TEducation[]
  contact?: TContact
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
    class="threecols bg-gray-100 text-black px-4 py-8 w-full flex flex-col gap-5 relative z-[1]"
    @click="handleEditSection"
  >
    <div class="container mx-auto">
      <h2 v-if="heading" class="text-xl font-semibold">{{ heading }}</h2>
      <p v-if="caption" class="text-gray-500">{{ caption }}</p>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <SectionEducations v-if="educations" :educations="educations" />
        <SectionAwards v-if="awards" :awards="awards" />
        <SectionContact v-if="contact" :contact="contact" />
      </div>
    </div>

    <SectionOverlay target="threecols" />
  </section>
</template>
