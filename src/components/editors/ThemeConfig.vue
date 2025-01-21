<script setup lang="ts">
import { ref } from 'vue'
import { useEditorStore } from '@/stores/editor'
import PanelGroup from './PanelGroup.vue'
import ColorPicker from './ColorPicker.vue'

type TTarget = 'text' | 'background'

const currentTarget = ref<TTarget>('text')
const editorStore = useEditorStore()

const handleChangeTarget = (target: TTarget) => {
  currentTarget.value = target
  editorStore.setThemeTarget(target)
}
</script>

<template>
  <PanelGroup>
    <div class="flex w-full gap-0 p-2 bg-gray-600 mb-1 rounded-md">
      <button
        class="py-1 px-3 bg-gray-600 text-gray-200 rounded-md flex-1"
        :class="{ 'bg-teal-500 text-white': currentTarget === 'text' }"
        @click="handleChangeTarget('text')"
      >
        Text
      </button>
      <button
        class="py-1 px-3 bg-gray-600 text-gray-200 rounded-md flex-1"
        :class="{ 'bg-teal-500 text-white': currentTarget === 'background' }"
        @click="handleChangeTarget('background')"
      >
        Background
      </button>
    </div>
    <ColorPicker />
  </PanelGroup>
</template>
