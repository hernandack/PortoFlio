<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { usePortfolioStore } from '@/stores/portfolio'
import { VueDraggableNext } from 'vue-draggable-next'
import { nanoid } from 'nanoid'
import EditorPanel from '@/components/EditorPanel.vue'
import CanvasPanel from '@/components/CanvasPanel.vue'
import { DSections } from '@/stores/dummy'

const portfolioStore = usePortfolioStore()
const authStore = useAuthStore()
const router = useRouter()
const sections = DSections

const addNewSection = () => {
  portfolioStore.addSection({
    id: nanoid(),
    type: 'hero',
    data: { title: 'New Section', subtitle: 'Subtitle' },
  })
}

const removeSection = (id: string) => {
  portfolioStore.removeSection(id)
}

onMounted(() => {
  if (!authStore.checkAuth()) {
    router.push('/')
  }
})
</script>

<template>
  <main
    class="page page--dashboard flex flex-col items-center justify-center w-full relative overflow-hidden"
  >
    <EditorPanel>
      <CanvasPanel :sections="sections" :is-draggable="false" title="Site Editor" />
    </EditorPanel>
    <button @click="addNewSection" class="btn btn-primary fixed bottom-5 right-5">
      Add New Section
    </button>
    <button @click="removeSection('hero')" class="btn btn-danger fixed bottom-5 right-20">
      Remove Hero Section
    </button>
  </main>
  <footer id="site-footer" class="site-footer bg-black text-gray-400 p-2 text-sm text-center">
    <p>
      Presented by &copy; <a href="#" target="_blank" class="text-white underline">Hernandack</a>
    </p>
  </footer>
  <VueDraggableNext v-model="sections" class="hidden"> </VueDraggableNext>
</template>
