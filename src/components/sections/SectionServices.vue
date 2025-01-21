<script setup lang="ts">
import { onMounted } from 'vue'
import SectionOverlay from '../editors/SectionOverlay.vue'
import { usePortfolioStore } from '@/stores/portfolio'
import * as eva from 'eva-icons'
import type { TService } from '@/types/Section'

defineProps<{ sectionId?: string; heading?: string; caption?: string; services: TService[] }>()

const emit = defineEmits(['on-edit-section'])
const handleEditSection = () => {
  if (usePortfolioStore().isEditing) {
    emit('on-edit-section')
  }
}

onMounted(() => {
  eva.replace()
})
</script>

<template>
  <section
    :id="sectionId"
    class="bg-gray-950 text-gray-200 px-4 py-20 w-full relative z-[1]"
    @click="handleEditSection"
  >
    <div class="container mx-auto flex flex-col gap-2">
      <h2 v-if="heading" class="text-3xl font-semibold">{{ heading }}</h2>
      <p v-if="caption" class="">{{ caption }}</p>

      <div v-if="services.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 my-5">
        <div
          v-for="service in services"
          :key="service.id"
          class="service__item rounded-md bg-white text-gray-900 px-10 py-10 flex flex-col gap-2 items-start"
        >
          <p v-if="service.icon" class="">
            <i :data-eva="service.icon" data-eva-height="60" data-eva-width="60"></i>
          </p>
          <h3 v-if="service.title" class="text-lg font-semibold mb-2">{{ service.title }}</h3>
          <p v-if="service.description" class="">{{ service.description }}</p>
        </div>
      </div>
    </div>

    <SectionOverlay target="services" />
  </section>
</template>
