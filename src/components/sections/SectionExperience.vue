<script setup lang="ts">
import SectionOverlay from '../editors/SectionOverlay.vue'
import { usePortfolioStore } from '@/stores/portfolio'
import type { TExperience } from '@/types/Section'

defineProps<{
  sectionId?: string
  heading?: string
  caption?: string
  experiences: TExperience[]
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
    :id="sectionId"
    class="experiences bg-gray-100 py-20 px-4 w-full relative z-[1]"
    @click="handleEditSection"
  >
    <div class="container experiences__container mx-auto flex flex-col gap-4">
      <h2 v-if="heading" class="text-3xl font-semibold text-left lg:max-w-96">{{ heading }}</h2>
      <p v-if="caption" class="text-gray-500 text-left lg:max-w-96">{{ caption }}</p>

      <div v-if="experiences.length" class="container mx-auto flex flex-col gap-4">
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="grid grid-cols-1 md:grid-cols-3 border-b-2 border-b-gray-400 last:border-b-0 pt-3 pb-7 last:pb-0"
        >
          <div class="flex flex-col gap-2">
            <h3 v-if="exp.title" class="font-semibold text-2xl">{{ exp.title }}</h3>
            <p v-if="exp.date" class="text-black text-sm opacity-80">{{ exp.date }}</p>
          </div>
          <p v-if="exp.description" class="text-gray-500">{{ exp.description }}</p>
          <div class="flex flex-col gap-2 text-right">
            <p v-if="exp.company" class="text-black text-xl">{{ exp.company }}</p>
            <p v-if="exp.location" class="text-black text-sm opacity-80">{{ exp.location }}</p>
          </div>
        </div>
      </div>
    </div>

    <SectionOverlay target="experiences" />
  </section>
</template>
