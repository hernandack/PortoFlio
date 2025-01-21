<script setup lang="ts">
import SectionOverlay from '../editors/SectionOverlay.vue'
import { usePortfolioStore } from '@/stores/portfolio'
import type { TContact } from '@/types/Section'

defineProps<{ sectionId?: string; heading?: string; caption?: string; contact: TContact }>()

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
    class="px-4 py-4 w-full flex flex-col gap-5 relative z-[1]"
    @click="handleEditSection"
  >
    <h2 v-if="heading" class="text-xl font-semibold">{{ heading }}</h2>
    <p v-if="caption" class="">{{ caption }}</p>

    <div class="flex flex-col gap-2">
      <h3 v-if="contact.title" class="text-lg font-semibold">{{ contact.title }}</h3>
      <p v-if="contact.email" class="">{{ contact.email }}</p>
      <p v-if="contact.address" class="">{{ contact.address }}</p>
      <p v-if="contact.phone" class="">{{ contact.phone }}</p>
      <p v-if="contact.description" class="">{{ contact.description }}</p>
    </div>

    <SectionOverlay target="contact" />
  </section>
</template>
