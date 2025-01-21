<script setup lang="ts">
import { useEditorStore } from '@/stores/editor'
import { ref, watch, computed } from 'vue'

const editorStore = useEditorStore()
const panelHeading = ref<string>('')
const panelCaption = ref<string>('')

const combinedWatch = computed(() => ({
  activeSection: editorStore.activeSection,
  activePanel: editorStore.activePanel,
}))

watch(
  combinedWatch,
  ({ activeSection, activePanel }) => {
    if (activePanel === 'site') {
      panelHeading.value = 'Site Information'
      panelCaption.value = 'This information will be used for SEO and social media sharing.'
    } else if (activePanel === 'content') {
      switch (activeSection?.type) {
        case 'hero':
          panelHeading.value = 'Hero'
          panelCaption.value =
            'Set your Hero section as your main profile with appealing content and photo.'
          break
        case 'generic':
          panelHeading.value = 'Generic'
          panelCaption.value = 'Add general heading - caption section in long text format'
          break
        case 'skills':
          panelHeading.value = 'Skills'
          panelCaption.value = 'Add your skillset, can be multiple skills'
          break
        case 'experiences':
          panelHeading.value = 'Experiences'
          panelCaption.value =
            'Write down all your related experiences in detail with proper description'
          break
        case 'projects':
          panelHeading.value = 'Projects'
          panelCaption.value =
            'List all your job projects or works like professional job, freelance, etc.'
          break
        case 'services':
          panelHeading.value = 'Services'
          panelCaption.value =
            'Share your services or products that you want to offer for your clients / visitors.'
          break
        case 'clients':
          panelHeading.value = 'Clients'
          panelCaption.value =
            'List all your clients or business partners to show your capabilities.'
          break
        case 'educations':
          panelHeading.value = 'Educations'
          panelCaption.value = 'Show your educations achievement.'
          break
        case 'awards':
          panelHeading.value = 'Awards'
          panelCaption.value = 'List any of your awards.'
          break
        case 'contact':
          panelHeading.value = 'Contact'
          panelCaption.value =
            'Add some contact information so that the visitor can contact you easily.'
          break
        case 'testimonials':
          panelHeading.value = 'Testimonials'
          panelCaption.value = 'Showcase what others say about you'
          break
        case 'socials':
          panelHeading.value = 'Socials'
          panelCaption.value = 'List your social media or community platform links'
          break
        default:
          panelHeading.value = ''
          panelCaption.value = ''
      }
    } else if (activePanel === 'layout') {
      panelHeading.value = 'Section Ordering'
      panelCaption.value =
        "Drag and drop with mouse or touch to re-order your portfolio section vertically. Please note some section is better to be set as default like 'Hero' and 'Footer'"
    } else if (activePanel === 'theme') {
      panelHeading.value = 'Theme Customizer'
      panelCaption.value =
        'Set the global styles of each section like the background colors and text colors. You can save the color palettes for quick style.'
    } else if (activePanel === 'config') {
      panelHeading.value = 'Config'
      panelCaption.value =
        'General configuration for your page, hide or show any section that you want to use.'
    }
  },
  { immediate: true },
)
</script>

<template>
  <div
    class="editor__panel panel flex flex-col gap-3 py-2 px-1 border-b-2 border-b-gray-300 last:border-b-0"
  >
    <div class="panel__header">
      <h3 v-if="panelHeading" class="text-xl font-bold mb-2">{{ panelHeading }}</h3>
      <p v-if="panelCaption" class="text-sm text-gray-200 leading-4">{{ panelCaption }}</p>
    </div>
    <div class="panel__body">
      <slot></slot>
    </div>
  </div>
</template>
