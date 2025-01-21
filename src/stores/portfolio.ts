import type { TSection } from '@/types/Section'
import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    sections: [] as TSection[],
    activeSection: null as TSection | null,
    isEditing: false as boolean,
    customStyles: new Map<string, string>(),
  }),
  actions: {
    addSection(section: TSection) {
      this.sections.push(section)
    },
    removeSection(sectionId: string) {
      this.sections = this.sections.filter((section) => section.id !== sectionId)
    },
    editSection(sectionId: string) {
      this.activeSection = this.sections.find((section) => section.id === sectionId) || null
      if (this.activeSection) {
        this.isEditing = true
      } else {
        this.isEditing = false
      }
    },
    updateSection(sectionId: string, updatedData: Record<string, unknown>) {
      const section = this.sections.find((section) => section.id === sectionId)
      if (section) {
        section.data = updatedData
      }
    },
    toggleEditing(value: boolean) {
      this.isEditing = value
    },
    updateStyles(key: string, value: string) {
      if (key.startsWith('--')) {
        this.customStyles.set(key, value)
      }
    },
    resetStyles() {
      this.customStyles.clear()
    },
  },
})
