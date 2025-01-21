<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted, watch } from 'vue'
import * as eva from 'eva-icons'
import { useEditorStore } from '@/stores/editor'
import { usePortfolioStore } from '@/stores/portfolio'

import SectionList from './editors/SectionList.vue'
import SiteInfo from './editors/SiteInfo.vue'
import ContentEditor from './editors/ContentEditor.vue'
import ThemeConfig from './editors/ThemeConfig.vue'
import EditorMenu from './editors/EditorMenu.vue'

const editorStore = useEditorStore()
const portfolioStore = usePortfolioStore()
const customStyleVars = ref<Record<string, string>>({})

onMounted(() => {
  eva.replace()
  portfolioStore.isEditing = true
})

onUnmounted(() => {
  portfolioStore.isEditing = false
})

watch(
  () => portfolioStore.customStyles,
  (newStyle) => {
    // customStyleVars.value = Array.from(newStyle)
    //   .map(([key, value]) => `${key}: ${value}`)
    //   .join('; ')
    customStyleVars.value = Object.fromEntries(newStyle)
  },
  { immediate: true, deep: true },
)

const isPanelEmpty = computed(() => editorStore.activePanel === null)
const isPanelSite = computed(() => editorStore.activePanel === 'site')
const isPanelLayout = computed(() => editorStore.activePanel === 'layout')
const isPanelTheme = computed(() => editorStore.activePanel === 'theme')
const isPanelContent = computed(() => editorStore.activePanel === 'content')
const isPanelConfig = computed(() => editorStore.activePanel === 'config')
</script>

<template>
  <div class="editor flex flex-col" :style="customStyleVars">
    <header
      class="flex w-full justify-between px-5 py-2 shadow-sm relative z-10 bg-black text-gray-100 pl-[50px]"
    >
      <h2 class="text-xl font-semibold">
        <span class="editor__title">Editor Panel</span>
        <span v-if="portfolioStore.activeSection" class="editor__current text-lg text-gray-300">
          / {{ portfolioStore.activeSection }}</span
        >
      </h2>
      <div class="editor__header__actions flex gap-2 text-sm">
        <button class="p-1">
          <i
            data-eva="question-mark-circle"
            data-eva-width="20"
            data-eva-height="20"
            data-eva-fill="currentColor"
          ></i>
        </button>
        <button
          class="button-editor px-3 py-1 flex items-center gap-2 rounded-sm bg-pink-600 text-white hover:bg-teal-600 hover:text-gray-200 transition-colors duration-300"
        >
          <i data-eva="save-outline" data-eva-fill="currentColor"></i> Save
        </button>
        <button
          class="button-editor px-3 py-1 flex items-center gap-2 rounded-sm bg-pink-600 text-white hover:bg-teal-600 hover:text-gray-200 transition-colors duration-300"
        >
          <i data-eva="cloud-upload-outline" data-eva-fill="currentColor"></i> Publish
        </button>
      </div>
    </header>
    <div class="editor__container grid grid-cols-editor gap-0">
      <aside class="editor__sidebar gap-0 p-0 bg-dark text-gray-100 grid grid-cols-sidebar">
        <EditorMenu />
        <div class="editor__panels max-h-editor-content overflow-y-auto">
          <template v-if="isPanelEmpty">
            <div class="editor__opening p-4 flex flex-col gap-2">
              <h3 class="text-xl font-bold">Porto</h3>
              <p class="leading-5 text-gray-300">
                This free portfolio page editor empowers you to create a professional online
                presence with a single, impactful page. Showcase your work, skills, and personality
                to the world. Pick the left toolbar to customize the content and looks.
              </p>
              <p class="leading-5 text-gray-300">
                Access the left toolbar to customize the content and looks. You can save and publish
                it to get a dedicated online page for you that you can share or use on your social
                media, resume, blog, etc.
              </p>
            </div>
          </template>
          <Transition name="fade" mode="out-in">
            <template v-if="isPanelSite">
              <SiteInfo />
            </template>
          </Transition>
          <Transition name="fade" mode="out-in">
            <template v-if="isPanelContent">
              <ContentEditor />
            </template>
          </Transition>
          <Transition name="fade" mode="out-in">
            <template v-if="isPanelLayout">
              <SectionList />
            </template>
          </Transition>
          <Transition name="fade" mode="out-in">
            <template v-if="isPanelTheme">
              <ThemeConfig />
            </template>
          </Transition>
          <Transition name="fade" mode="out-in">
            <template v-if="isPanelConfig">
              <div class="bg-gray-800 p-4">
                <h3 class="text-xl font-semibold">Config Settings</h3>
                <p class="text-gray-500">Coming soon...</p>
              </div>
            </template>
          </Transition>
        </div>
      </aside>
      <div class="editor__content bg-gray-600 max-h-editor-content overflow-y-auto">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-leave-from,
.fade-leave-active {
  position: absolute;
  opacity: 0;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
