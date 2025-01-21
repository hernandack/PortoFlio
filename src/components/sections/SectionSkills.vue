<script setup lang="ts">
import SectionOverlay from '../editors/SectionOverlay.vue'
import { usePortfolioStore } from '@/stores/portfolio'
import type { TSkill } from '@/types/Section'

defineProps<{ sectionId?: string; heading?: string; caption?: string; skills: TSkill[] }>()

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
    class="bg-black text-white p-4 w-full flex flex-col gap-5 relative z-[1]"
    @click="handleEditSection"
  >
    <h2 v-if="heading" class="text-xl font-semibold">{{ heading }}</h2>
    <p v-if="caption" class="text-gray-500">{{ caption }}</p>

    <div v-if="skills.length" class="flex flex-wrap gap-6 w-full justify-center">
      <div v-for="skill in skills" :key="skill.id">
        <h3 v-if="skill.name" class="text-lg font-semibold">{{ skill.name }}</h3>
        <p v-if="skill.level" class="text-gray-500">{{ skill.level }}</p>
        <p v-if="skill.year" class="text-gray-500">{{ skill.year }}</p>
        <p v-if="skill.description" class="text-gray-500">{{ skill.description }}</p>
      </div>
    </div>

    <SectionOverlay target="skills" />
  </section>
</template>
