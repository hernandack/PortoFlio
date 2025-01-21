<script setup lang="ts">
import SectionOverlay from '../editors/SectionOverlay.vue'
import { usePortfolioStore } from '@/stores/portfolio'
import type { TClient } from '@/types/Section'

defineProps<{ sectionId?: string; heading?: string; caption?: string; clients: TClient[] }>()

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
    class="bg-white p-4 w-full flex flex-col gap-3 relative z-[1] py-14"
    @click="handleEditSection"
  >
    <h2 v-if="heading" class="text-3xl font-semibold text-center">{{ heading }}</h2>
    <p v-if="caption" class="text-gray-500 text-center">{{ caption }}</p>

    <div
      v-if="clients.length"
      class="flex flex-wrap gap-3 w-full justify-evenly items-center my-10"
    >
      <div v-for="client in clients" :key="client.id" class="flex justify-center items-center">
        <img
          v-if="client.image"
          :src="client.image"
          :alt="client.name"
          class="text-gray-500 max-w-32 h-auto object-contain"
        />
      </div>
    </div>

    <SectionOverlay target="clients" />
  </section>
</template>
