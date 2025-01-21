<script setup lang="ts">
import SectionOverlay from '../editors/SectionOverlay.vue'
import { usePortfolioStore } from '@/stores/portfolio'
import type { TAward } from '@/types/Section'

defineProps<{ sectionId?: string; heading?: string; caption?: string; awards: TAward[] }>()

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
    <p v-if="caption" class="text-gray-500">{{ caption }}</p>

    <div v-if="awards.length" class="flex flex-col gap-2">
      <div v-for="award in awards" :key="award.id">
        <h3 v-if="award.title" class="text-lg font-semibold">{{ award.title }}</h3>
        <p v-if="award.date" class="">{{ award.date }}</p>
        <p v-if="award.description" class="">{{ award.description }}</p>
      </div>
    </div>

    <SectionOverlay target="awards" />
  </section>
</template>
