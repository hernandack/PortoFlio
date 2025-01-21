<script setup lang="ts">
import SectionExperience from '@/components/sections/SectionExperience.vue'
import SectionSkills from '@/components/sections/SectionSkills.vue'
import SectionTestimonials from '@/components/sections/SectionTestimonials.vue'
import SectionAwards from '@/components/sections/SectionAwards.vue'
import SectionClients from '@/components/sections/SectionClients.vue'
import SectionContact from '@/components/sections/SectionContact.vue'
import SectionProjects from '@/components/sections/SectionProjects.vue'
import SectionServices from '@/components/sections/SectionServices.vue'
import SectionEducations from '@/components/sections/SectionEducations.vue'
import SectionSocials from '@/components/sections/SectionSocials.vue'
import SectionHero from '@/components/sections/SectionHero.vue'
import SectionGeneric from '@/components/sections/SectionGeneric.vue'
import SectionEduAwardContact from './SectionEduAwardContact.vue'

import { useEditorStore } from '@/stores/editor'

import type {
  TSection,
  TSectionData,
  TSectionThreecols,
  TSectionHero,
  TSectionSkills,
  TSectionExperience,
  TSectionAwards,
  TSectionClients,
  TSectionContact,
  TSectionEducation,
  TSectionProjects,
  TSectionServices,
  TSectionSocial,
  TSectionTestimonials,
} from '@/types/Section'

defineProps<{ section: TSection; sectionId?: string }>()

const editorStore = useEditorStore()

const isSectionGeneric = (section: TSection, data: TSectionData | null) => {
  if (data === null || section.type === 'generic') {
    return true
  }
}

const isSectionHero = (section: TSection, data: TSectionData): data is TSectionHero => {
  return section.type === 'hero' && (data as TSectionHero).hero !== undefined
}

const isSectionSkills = (section: TSection, data: TSectionData): data is TSectionSkills => {
  return section.type === 'skills' && (data as TSectionSkills).skills !== undefined
}

const isSectionExperience = (section: TSection, data: TSectionData): data is TSectionExperience => {
  return section.type === 'experiences' && (data as TSectionExperience).experiences !== undefined
}

const isSectionAwards = (section: TSection, data: TSectionData): data is TSectionAwards => {
  return section.type === 'awards' && (data as TSectionAwards).awards !== undefined
}

const isSectionClients = (section: TSection, data: TSectionData): data is TSectionClients => {
  return section.type === 'clients' && (data as TSectionClients).clients !== undefined
}

const isSectionContact = (section: TSection, data: TSectionData): data is TSectionContact => {
  return section.type === 'contact' && (data as TSectionContact).contact !== undefined
}

const isSectionEducation = (section: TSection, data: TSectionData): data is TSectionEducation => {
  return section.type === 'educations' && (data as TSectionEducation).educations !== undefined
}

const isSectionProjects = (section: TSection, data: TSectionData): data is TSectionProjects => {
  return section.type === 'projects' && (data as TSectionProjects).projects !== undefined
}

const isSectionServices = (section: TSection, data: TSectionData): data is TSectionServices => {
  return section.type === 'services' && (data as TSectionServices).services !== undefined
}

const isSectionSocial = (section: TSection, data: TSectionData): data is TSectionSocial => {
  return section.type === 'socials' && (data as TSectionSocial).socials !== undefined
}

const isSectionTestimonials = (
  section: TSection,
  data: TSectionData,
): data is TSectionTestimonials => {
  return (
    section.type === 'testimonials' && (data as TSectionTestimonials).testimonials !== undefined
  )
}

const isSectionThreecols = (section: TSection, data: TSectionData): data is TSectionThreecols => {
  return (
    section.type === '3cols' &&
    (data as TSectionEducation).educations !== undefined &&
    (data as TSectionAwards).awards !== undefined &&
    (data as TSectionContact).contact !== undefined
  )
}

const handleEditSection = (section: TSection) => {
  if (section) {
    editorStore.setActivePanel('content')
    editorStore.setActiveSection(section)
  }
}
</script>

<template>
  <template v-if="isSectionGeneric(section, section.data)">
    <SectionGeneric :section="section" @on-edit-section="handleEditSection(section)" />
  </template>

  <template v-if="isSectionHero(section, section.data)">
    <SectionHero
      :heading="section.data.heading"
      :caption="section.data.caption"
      :button="section.data.button"
      :hero="section.data.hero"
      :image="section.data.image"
      @on-edit-section="handleEditSection(section)"
    />
  </template>

  <template v-if="isSectionSkills(section, section.data)">
    <SectionSkills
      :heading="section.data.heading"
      :caption="section.data.caption"
      :skills="section.data.skills"
      @on-edit-section="handleEditSection(section)"
    />
  </template>

  <template v-if="isSectionExperience(section, section.data)">
    <SectionExperience
      :heading="section.data.heading"
      :caption="section.data.caption"
      :experiences="section.data.experiences"
      @on-edit-section="handleEditSection(section)"
    />
  </template>

  <template v-if="isSectionAwards(section, section.data)">
    <SectionAwards
      :heading="section.data.heading"
      :caption="section.data.caption"
      :awards="section.data.awards"
      @on-edit-section="handleEditSection(section)"
    />
  </template>

  <template v-if="isSectionClients(section, section.data)">
    <SectionClients
      :heading="section.data.heading"
      :caption="section.data.caption"
      :clients="section.data.clients"
      @on-edit-section="handleEditSection(section)"
    />
  </template>

  <template v-if="isSectionContact(section, section.data)">
    <SectionContact
      :heading="section.data.heading"
      :caption="section.data.caption"
      :contact="section.data.contact"
      @on-edit-section="handleEditSection(section)"
    />
  </template>

  <template v-if="isSectionProjects(section, section.data)">
    <SectionProjects
      :heading="section.data.heading"
      :caption="section.data.caption"
      :projects="section.data.projects"
      @on-edit-section="handleEditSection(section)"
    />
  </template>

  <template v-if="isSectionServices(section, section.data)">
    <SectionServices
      :heading="section.data.heading"
      :caption="section.data.caption"
      :services="section.data.services"
      @on-edit-section="handleEditSection(section)"
    />
  </template>

  <template v-if="isSectionSocial(section, section.data)">
    <SectionSocials :socials="section.data.socials" @on-edit-section="handleEditSection(section)" />
  </template>

  <template v-if="isSectionTestimonials(section, section.data)">
    <SectionTestimonials
      :heading="section.data.heading"
      :caption="section.data.caption"
      :testimonials="section.data.testimonials"
      @on-edit-section="handleEditSection(section)"
    />
  </template>

  <template v-if="isSectionEducation(section, section.data)">
    <SectionEducations
      :heading="section.data.heading"
      :caption="section.data.caption"
      :educations="section.data.educations"
      @on-edit-section="handleEditSection(section)"
    />
  </template>

  <template v-if="isSectionThreecols(section, section.data)">
    <SectionEduAwardContact
      v-if="section.data"
      :section="section"
      :educations="section.data.educations"
      :awards="section.data.awards"
      :contact="section.data.contact"
      @on-edit-section="handleEditSection(section)"
    />
  </template>
</template>
