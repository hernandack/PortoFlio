<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import * as eva from 'eva-icons'
import PanelGroup from './PanelGroup.vue'

import { DSections } from '@/stores/dummy'

onMounted(() => {
  eva.replace()
})

const sections = ref(DSections)
</script>

<template>
  <div class="editor__sections">
    <PanelGroup
      heading="Section Ordering"
      caption="Drag and drop with mouse or touch to re-order your portfolio section vertically. Please note
        some section is better to be set as default like 'Hero' and 'Footer'"
    ></PanelGroup>
    <VueDraggableNext v-model="sections" class="flex flex-col gap-0 w-full">
      <div
        v-for="sect in DSections"
        :key="sect.id"
        class="w-full bg-gray-500 text-white px-4 py-3 border border-gray-600 cursor-ns-resize hover:border-white transition-colors flex gap-2 items-center"
      >
        <div class=""><i data-eva="hash-outline" data-eva-fill="currentColor"></i></div>
        <div class="flex flex-col">
          <h3 v-if="sect.data?.heading" class="text-gray-200">
            {{
              sect.data?.heading.substring(0, 21) + (sect.data?.heading.length > 21 ? '...' : '')
            }}
          </h3>
          <h3 v-else class="text-gray-200">
            {{ sect.heading && sect.heading?.length > 1 ? sect.heading : '-' }}
          </h3>
          <p v-if="sect.type" class="text-sm italic">{{ sect.type }}</p>
        </div>
      </div>
    </VueDraggableNext>
  </div>
</template>
