<script setup lang="ts">
import SectionOverlay from '../editors/SectionOverlay.vue'
import { usePortfolioStore } from '@/stores/portfolio'
import type { TProject } from '@/types/Section'

defineProps<{ sectionId?: string; heading?: string; caption?: string; projects: TProject[] }>()

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
    class="section bg-white w-full flex flex-col gap-5 relative z-[1] py-14 px-4"
    @click="handleEditSection"
  >
    <div class="container mx-auto">
      <h2 v-if="heading" class="text-3xl font-semibold">{{ heading }}</h2>
      <p v-if="caption" class="">{{ caption }}</p>

      <div
        v-if="projects.length"
        class="section__container grid grid-cols-1 lg:grid-cols-2 w-full gap-0 mt-8"
      >
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="project__item grid grid-cols-1 lg:grid-cols-2 w-full gap-0"
        >
          <figure
            v-if="project.image"
            class="text-gray-500 w-full"
            :class="{ 'order-1 lg:order-1': index % 4 < 2, 'order-2 lg:order-2': index % 4 >= 2 }"
          >
            <img
              :src="project.image"
              alt="project image"
              class="w-full h-full object-cover aspect-square block"
            />
          </figure>
          <div
            :class="{
              'order-2 lg:order-2': index % 4 < 2,
              'order-1 lg:order-1 text-right': index % 4 >= 2,
            }"
            class="project__item__info flex flex-col gap-2 justify-center p-8"
          >
            <h3 v-if="project.title" class="text-lg font-semibold">{{ project.title }}</h3>
            <p v-if="project.description" class="text-gray-500">{{ project.description }}</p>
            <a v-if="project.link" :href="project.link" target="_blank" class="text-teal-800">
              {{ project.link }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <SectionOverlay target="projects" />
  </section>
</template>
