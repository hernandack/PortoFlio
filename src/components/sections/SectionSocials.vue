<script setup lang="ts">
import SectionOverlay from '../editors/SectionOverlay.vue'
import { usePortfolioStore } from '@/stores/portfolio'
import type { TSocial } from '@/types/Section'

defineProps<{ sectionId?: string; heading?: string; caption?: string; socials: TSocial[] }>()

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
    class="bg-white p-4 w-full flex flex-col gap-5 relative z-[1]"
    @click="handleEditSection"
  >
    <h2 v-if="heading" class="text-xl font-semibold">{{ heading }}</h2>
    <p v-if="caption" class="text-gray-500">{{ caption }}</p>

    <div v-if="socials.length" class="flex flex-col gap-3 w-full justify-center">
      <div v-for="(social, index) in socials" :key="index">
        <a v-if="social.link" :href="social.link" target="_blank" class="text-gray-500">{{
          social.name
        }}</a>
      </div>
    </div>

    <SectionOverlay target="socials" />
  </section>
</template>
