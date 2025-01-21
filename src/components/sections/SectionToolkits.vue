<script setup lang="ts">
import type { TSection } from '@/types/Section'

const props = defineProps<{ section: TSection; sectionId?: string }>()
const emits = defineEmits(['remove'])

const removeSection = () => {
  emits('remove', props.section.id)
}

const editSection = () => {
  // Add logic to open an editor modal
  console.log('Editing TSection:', props.section)
}
</script>

<template>
  <div class="mt-3 flex justify-between absolute top-0 right-0">
    <button class="px-4 py-2 bg-green-500 text-white rounded" @click="editSection">Edit</button>
    <button class="px-4 py-2 bg-red-500 text-white rounded" @click="removeSection">Remove</button>
  </div>
</template>
