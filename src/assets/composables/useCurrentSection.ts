import { ref, watch } from 'vue'

import { useEditorStore } from '@/stores/editor'

export const useCurrentSection = (type: string) => {
  const editorStore = useEditorStore()
  const isCurrentSection = ref<boolean>(false)

  watch(
    () => editorStore.activeSection,
    (newSection) => (isCurrentSection.value = type === newSection?.type),
    { immediate: true },
  )

  return isCurrentSection
}
