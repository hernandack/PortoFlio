<script setup lang="ts">
import { useCurrentSection } from '@/assets/composables/useCurrentSection'

defineProps<{ target: string }>()
</script>

<template>
  <div
    v-if="useCurrentSection(target).value"
    class="absolute inset-0 bg-gray-100 bg-opacity-0 z-10 flex justify-start items-end flex-col p-0 text-sm border-4 border-teal-600 text-black"
  >
    <span class="py-2 px-5 bg-teal-800 text-white bg-opacity-70">Editing...</span>
  </div>
</template>
