<script setup lang="ts">
import { ref } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import SectionCard from '@/components/sections/SectionCard.vue'
import type { TSection } from '@/types/Section'

const props = defineProps<{
  sections: TSection[]
  isDraggable: boolean
  title?: string
}>()

const localSections = ref(props.sections)
</script>

<template>
  <template v-if="props.isDraggable">
    <VueDraggableNext v-model="localSections" class="flex flex-col gap-0 w-full">
      <SectionCard
        v-for="section in sections"
        :key="section.id"
        :sectionId="section.id"
        :section="section"
      />
    </VueDraggableNext>
  </template>
  <template v-else>
    <div class="flex flex-col gap-0 w-full">
      <SectionCard v-for="section in sections" :key="section.id" :section="section" />
    </div>
  </template>
</template>
