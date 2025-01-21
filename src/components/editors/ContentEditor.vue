<script setup lang="ts">
import { ref, watch } from 'vue'
import { useEditorStore } from '@/stores/editor'
import PanelGroup from './PanelGroup.vue'
import TextEditor from './TextEditor.vue'
import {
  isTSection,
  isSectionHero,
  isSectionGeneric,
  isSectionSkills,
  isSectionAwards,
  isSectionClients,
  isSectionContact,
  isSectionEducation,
  isSectionExperience,
  isSectionProjects,
  isSectionServices,
  isSectionTestimonials,
  // isSectionThreecols,
  isSectionSocials,
} from '@/utils/typeGuards'

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

const editorStore = useEditorStore()
const editableData = ref<
  | TSection
  | TSectionData
  | TSectionHero
  | TSectionThreecols
  | TSectionSkills
  | TSectionExperience
  | TSectionAwards
  | TSectionClients
  | TSectionContact
  | TSectionEducation
  | TSectionEducation
  | TSectionProjects
  | TSectionServices
  | TSectionSocial
  | TSectionTestimonials
  | null
>(null)

watch(
  () => editorStore.activeSection,
  () => {
    editableData.value = editorStore.activeSection
  },
  { immediate: true },
)
</script>

<template>
  <div class="editor__writer py-2 px-2">
    <PanelGroup v-if="editorStore.activePanel === 'content'">
      <form v-if="editableData" class="editor__form flex flex-col gap-2 text-white">
        <template v-if="isTSection(editableData)">
          <fieldset v-if="editableData.data.heading" class="flex flex-col pb-2">
            <label for="site-title" class="text-sm mb-2">Heading</label>
            <TextEditor :model-value="{ content: editableData.data.heading || '' }" />
          </fieldset>
          <fieldset v-if="editableData.data?.caption" class="flex flex-col pb-2">
            <label for="site-description" class="text-sm mb-2">Caption</label>
            <TextEditor :model-value="{ content: editableData.data.caption || '' }" />
          </fieldset>
          <fieldset v-if="editableData.data?.button" class="flex flex-col gap-2 pb-2">
            <label for="button-label" class="text-sm">Button Label</label>
            <input type="text" id="button-label" name="button-label" class="form-input" />
            <label for="button-link" class="text-sm">Button Link</label>
            <input type="text" id="button-link" name="button-link" class="form-input" />
          </fieldset>
        </template>

        <template v-if="isSectionHero(editableData)">
          <fieldset v-if="editableData.data.heading" class="flex flex-col pb-2">
            <label for="site-title" class="text-sm mb-2">Heading</label>
            <TextEditor :model-value="{ content: editableData.data.heading || '' }" />
          </fieldset>
          <fieldset v-if="editableData.data?.caption" class="flex flex-col pb-2">
            <label for="site-description" class="text-sm mb-2">Caption</label>
            <TextEditor :model-value="{ content: editableData.data.caption || '' }" />
          </fieldset>
          <fieldset v-if="editableData.data?.button" class="flex flex-col gap-2 pb-2">
            <label for="button-label" class="text-sm">Button Label</label>
            <input type="text" id="button-label" name="button-label" class="form-input" />
            <label for="button-link" class="text-sm">Button Link</label>
            <input type="text" id="button-link" name="button-link" class="form-input" />
          </fieldset>
        </template>

        <template v-if="isSectionGeneric(editableData)">
          <fieldset v-if="editableData.data.heading" class="flex flex-col pb-2">
            <label for="site-title" class="text-sm mb-2">Heading</label>
            <TextEditor :model-value="{ content: editableData.data.heading || '' }" />
          </fieldset>
          <fieldset v-if="editableData.data?.caption" class="flex flex-col pb-2">
            <label for="site-description" class="text-sm mb-2">Caption</label>
            <TextEditor :model-value="{ content: editableData.data.caption || '' }" />
          </fieldset>
          <fieldset v-if="editableData.data?.button" class="flex flex-col gap-2 pb-2">
            <label for="button-label" class="text-sm">Button Label</label>
            <input type="text" id="button-label" name="button-label" class="form-input" />
            <label for="button-link" class="text-sm">Button Link</label>
            <input type="text" id="button-link" name="button-link" class="form-input" />
          </fieldset>
        </template>

        <fieldset v-if="isSectionSkills(editableData)" class="flex flex-col gap-2 pb-2">
          <label for="button-label" class="text-sm">Skill labels</label>
          <input
            type="text"
            id="button-label"
            name="button-label"
            class="form-input"
            v-model="editableData.data.skills"
          />
        </fieldset>

        <fieldset v-if="isSectionExperience(editableData)" class="flex flex-col gap-2 pb-2">
          <label for="button-label" class="text-sm">Experiences</label>
          <TextEditor :model-value="{ content: editableData.data.experiences || '' }" />
        </fieldset>

        <fieldset v-if="isSectionProjects(editableData)" class="flex flex-col gap-2 pb-2">
          <label for="button-label" class="text-sm">Projects</label>
          <TextEditor :model-value="{ content: editableData.data.projects || '' }" />
        </fieldset>

        <fieldset v-if="isSectionServices(editableData)" class="flex flex-col gap-2 pb-2">
          <label for="button-label" class="text-sm">Services</label>
          <TextEditor :model-value="{ content: editableData.data.services || '' }" />
        </fieldset>

        <fieldset v-if="isSectionClients(editableData)" class="flex flex-col gap-2 pb-2">
          <label for="button-label" class="text-sm">Clients</label>
          <TextEditor :model-value="{ content: editableData.data.clients || '' }" />
        </fieldset>

        <fieldset v-if="isSectionContact(editableData)" class="flex flex-col gap-2 pb-2">
          <label for="button-label" class="text-sm">Contact</label>
          <TextEditor :model-value="{ content: editableData.data.contact || '' }" />
        </fieldset>

        <fieldset v-if="isSectionTestimonials(editableData)" class="flex flex-col gap-2 pb-2">
          <label for="button-label" class="text-sm">Testimonials</label>
          <TextEditor :model-value="{ content: editableData.data.testimonials || '' }" />
        </fieldset>

        <fieldset v-if="isSectionEducation(editableData)" class="flex flex-col gap-2 pb-2">
          <label for="button-label" class="text-sm">educations</label>
          <TextEditor :model-value="{ content: editableData.data.educations || '' }" />
        </fieldset>

        <fieldset v-if="isSectionAwards(editableData)" class="flex flex-col gap-2 pb-2">
          <label for="button-label" class="text-sm">Awards</label>
          <TextEditor :model-value="{ content: editableData.data.awards || '' }" />
        </fieldset>

        <fieldset v-if="isSectionSocials(editableData)" class="flex flex-col gap-2 pb-2">
          <label for="button-label" class="text-sm">Socials</label>
          <TextEditor :model-value="{ content: editableData.data.socials || '' }" />
        </fieldset>
      </form>
    </PanelGroup>
  </div>
</template>
