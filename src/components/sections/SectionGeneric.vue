<script setup lang="ts">
import SectionOverlay from '../editors/SectionOverlay.vue'
import { usePortfolioStore } from '@/stores/portfolio'
import type { TSection } from '@/types/Section'

defineProps<{ section: TSection }>()

const emit = defineEmits(['on-edit-section'])
const handleEditSection = () => {
  if (usePortfolioStore().isEditing) {
    emit('on-edit-section')
  }
}
</script>

<template>
  <section
    class="generic bg-white py-20 bg-cover bg-center relative"
    :style="{ backgroundImage: `url('${section.data.image}')` }"
    @click="handleEditSection"
  >
    <div class="container mx-auto flex flex-col gap-5 px-3 md:px-56">
      <h2 v-if="section.data.heading" class="text-4xl font-semibold text-center">
        {{ section.data.heading }}
      </h2>
      <p v-if="section.data.caption" class="text-gray-500 text-center text-lg">
        {{ section.data.caption }}
      </p>
    </div>

    <SectionOverlay target="generic" />
  </section>
</template>
