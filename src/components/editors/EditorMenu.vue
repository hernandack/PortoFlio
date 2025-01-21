<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useEditorStore } from '@/stores/editor'
import type { TPanel } from '@/types/Editor'
import { useAuthStore } from '@/stores/auth'

const editorStore = useEditorStore()
const authStore = useAuthStore()
const router = useRouter()

const isPanelSite = editorStore.activePanel === 'site'
const isPanelContent = editorStore.activePanel === 'content'
const isPanelLayout = editorStore.activePanel === 'layout'
const isPanelTheme = editorStore.activePanel === 'theme'
const isPanelConfig = editorStore.activePanel === 'config'

const handleActivePanel = (panel: TPanel) => {
  if (panel) {
    editorStore.setActivePanel(panel)
  }
}

const handleLogout = () => {
  authStore.doLogout()
  router.push('/')
}
</script>

<template>
  <menu class="editor__nav flex flex-col gap-1 w-full bg-black items-center py-4">
    <button
      class="toolbar-btn p-2 rounded-sm hover:bg-gray-600 transition-colors duration-200 relative before:w-2 before:h-1 before:absolute before:top-1/2 before:left-full"
      :class="isPanelSite ? 'bg-gray-500 before:bg-gray-500' : 'bg-gray-800 before:opacity-0'"
      @click="handleActivePanel('site')"
    >
      <i data-eva="cube" data-eva-fill="currentColor" data-eva-height="20" data-eva-width="20"></i>
    </button>
    <button
      class="toolbar-btn p-2 rounded-sm hover:bg-gray-600 transition-colors duration-200 relative before:w-2 before:h-1 before:absolute before:top-1/2 before:left-full"
      :class="isPanelContent ? 'bg-gray-500 before:bg-gray-500' : 'bg-gray-800 before:opacity-0'"
      @click="handleActivePanel('content')"
    >
      <i
        data-eva="file-text"
        data-eva-fill="currentColor"
        data-eva-height="20"
        data-eva-width="20"
      ></i>
    </button>
    <button
      class="toolbar-btn p-2 rounded-sm hover:bg-gray-600 transition-colors duration-200 relative before:w-2 before:h-1 before:absolute before:top-1/2 before:left-full"
      :class="isPanelLayout ? 'bg-gray-500 before:bg-gray-500' : 'bg-gray-800 before:opacity-0'"
      @click="handleActivePanel('layout')"
    >
      <i
        data-eva="layout"
        data-eva-fill="currentColor"
        data-eva-height="20"
        data-eva-width="20"
      ></i>
    </button>
    <button
      class="toolbar-btn p-2 rounded-sm hover:bg-gray-600 transition-colors duration-200 relative before:w-2 before:h-1 before:absolute before:top-1/2 before:left-full"
      :class="isPanelTheme ? 'bg-gray-500 before:bg-gray-500' : 'bg-gray-800 before:opacity-0'"
      @click="handleActivePanel('theme')"
    >
      <i
        data-eva="color-palette"
        data-eva-fill="currentColor"
        data-eva-height="20"
        data-eva-width="20"
      ></i>
    </button>
    <button
      class="toolbar-btn p-2 rounded-sm hover:bg-gray-600 transition-colors duration-200 relative before:w-2 before:h-1 before:absolute before:top-1/2 before:left-full"
      :class="isPanelConfig ? 'bg-gray-500 before:bg-gray-500' : 'bg-gray-800 before:opacity-0'"
      @click="handleActivePanel('config')"
    >
      <i
        data-eva="settings-2"
        data-eva-fill="currentColor"
        data-eva-height="20"
        data-eva-width="20"
      ></i>
    </button>
    <div class="editor__user mt-auto">
      <button
        type="button"
        click="toolbar-btn p-2 rounded-sm hover:bg-gray-600 transition-colors duration-200 relative before:w-2 before:h-1 before:absolute before:top-1/2 before:left-full"
        @click="handleLogout()"
      >
        <i
          data-eva="power-outline"
          data-eva-fill="currentColor"
          data-eva-width="20"
          data-eva-height="20"
        ></i>
      </button>
    </div>
  </menu>
</template>
