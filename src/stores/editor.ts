import { defineStore } from 'pinia'
import type { TSection } from '@/types/Section'

export const useEditorStore = defineStore('editor', {
  state: (): {
    activeSectionId: string | null
    activePanel: 'site' | 'layout' | 'theme' | 'content' | 'config' | null
    activeSection: TSection | null
    activeThemeTarget: 'text' | 'background'
  } => ({
    activeSectionId: null,
    activePanel: null,
    activeSection: null,
    activeThemeTarget: 'text',
  }),
  actions: {
    setActiveSectionId(sectionId: string) {
      this.activeSectionId = sectionId
    },
    setActivePanel(panel: 'site' | 'layout' | 'theme' | 'content' | 'config') {
      this.activePanel = panel
    },
    setActiveSection(section: TSection) {
      this.activeSection = section
    },
    setThemeTarget(target: 'text' | 'background') {
      this.activeThemeTarget = target
    },
  },
})
