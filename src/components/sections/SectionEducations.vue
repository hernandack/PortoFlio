<script setup lang="ts">
import SectionOverlay from '../editors/SectionOverlay.vue'
import { usePortfolioStore } from '@/stores/portfolio'
import type { TEducation } from '@/types/Section'

defineProps<{ sectionId?: string; heading?: string; caption?: string; educations: TEducation[] }>()

const emit = defineEmits(['on-edit-section'])
const handleEditSection = () => {
  if (usePortfolioStore().isEditing) {
    emit('on-edit-section')
  }
}
</script>

<template>
  <section
    :id="sectionId"
    class="p-4 w-full flex flex-col gap-5 relative z-[1]"
    @click="handleEditSection"
  >
    <h2 v-if="heading" class="text-xl font-semibold">{{ heading }}</h2>
    <p v-if="caption" class="">{{ caption }}</p>

    <div v-if="educations.length" class="flex flex-col gap-2">
      <div v-for="(edu, index) in educations" :key="index">
        <h3 v-if="edu.title" class="text-lg font-semibold">{{ edu.title }}</h3>
        <p v-if="edu.school" class="">{{ edu.school }}</p>
        <p v-if="edu.date" class="">{{ edu.date }}</p>
        <p v-if="edu.school" class="">{{ edu.location }}</p>
        <p v-if="edu.description" class="">{{ edu.description }}</p>
      </div>
    </div>

    <SectionOverlay target="educations" />
  </section>
</template>
