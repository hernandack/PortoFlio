<script lang="ts" setup>
import { onBeforeUnmount, watch } from 'vue'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Heading from '@tiptap/extension-heading'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import Placeholder from '@tiptap/extension-placeholder'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'

// set props to target the value
const props = defineProps<{
  modelValue: Record<string, unknown>
}>()

// set emit to trigger value changes on selected section data
const emit = defineEmits(['update:modelValue'])

// Initialize the Tiptap editor with extensions
const editor = useEditor({
  extensions: [
    StarterKit,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Heading.configure({
      levels: [1, 2, 3, 4, 5, 6],
    }),
    Bold,
    Italic,
    Underline,
    Strike,
    Subscript,
    Superscript,
    TextStyle,
    FontFamily,
    Placeholder.configure({
      placeholder: 'Write something...',
    }),
  ],
  content: props.modelValue,
  onUpdate: ({ editor }) => {
    emit('update:modelValue', { ...props.modelValue, content: editor.getHTML() })
  },
})

// Watch for changes in the prop and update the editor content
watch(
  () => props.modelValue.content,
  (newValue) => {
    if (editor.value && editor.value?.getHTML() !== newValue) {
      if (newValue) editor.value?.commands.setContent(newValue)
    }
  },
)

// Toolbar actions
const setHeading = (event: Event): void => {
  if (!editor.value) return

  const target = event.target as HTMLSelectElement
  const value = target.value

  const level = value === 'paragraph' ? null : parseInt(value.split('-')[1])
  if (level !== null) {
    editor.value.chain().focus().toggleHeading({ level: 1 }).run()
  } else {
    editor.value.chain().focus().setParagraph().run()
  }
}

const setTextAlign = (alignment: 'left' | 'center' | 'right' | 'justify'): void => {
  if (!editor.value) return
  editor.value.chain().focus().setTextAlign(alignment).run()
}

const toggleBold = (): void => {
  if (!editor.value) return
  editor.value.chain().focus().toggleBold().run()
}

const toggleItalic = (): void => {
  if (!editor.value) return
  editor.value.chain().focus().toggleItalic().run()
}

const toggleUnderline = (): void => {
  if (!editor.value) return
  editor.value.chain().focus().toggleUnderline().run()
}

const toggleSubscript = (): void => {
  if (!editor.value) return
  editor.value.chain().focus().toggleSubscript().run()
}

const toggleSuperscript = (): void => {
  if (!editor.value) return
  editor.value.chain().focus().toggleSuperscript().run()
}

const toggleStrike = (): void => {
  if (!editor.value) return
  editor.value.chain().focus().toggleStrike().run()
}

// Cleanup the editor instance
onBeforeUnmount(() => {
  if (editor.value) editor.value.destroy()
})
</script>

<template>
  <div class="editor-container">
    <!-- Toolbar -->
    <div class="toolbar flex flex-col gap-1">
      <!-- Heading Options -->
      <div class="toolbar__group text-sm">
        <select @change="setHeading($event)">
          <option value="paragraph">Paragraph</option>
          <option value="heading-1">Heading 1</option>
          <option value="heading-2">Heading 2</option>
          <option value="heading-3">Heading 3</option>
          <option value="heading-4">Heading 5</option>
          <option value="heading-5">Heading 5</option>
          <option value="heading-6">Heading 6</option>
        </select>
      </div>

      <!-- Alignment Options -->
      <div class="toolbar__group flex gap-1 items-center text-sm">
        <button type="button" @click="setTextAlign('left')">
          <span class="pi pi-align-left"></span>
        </button>
        <button type="button" @click="setTextAlign('center')">
          <span class="pi pi-align-center"></span>
        </button>
        <button type="button" @click="setTextAlign('right')">
          <span class="pi pi-align-right"></span>
        </button>
        <button type="button" @click="setTextAlign('justify')">
          <span class="pi pi-align-justify"></span>
        </button>
      </div>

      <div class="toolbar__group flex gap-1 items-center text-sm">
        <!-- Font Styling -->
        <button type="button" @click="toggleBold" class="font-bold">B</button>
        <button type="button" @click="toggleItalic" class="italic">i</button>
        <button type="button" @click="toggleUnderline" class="underline">U</button>
        <button type="button" @click="toggleStrike" class="line-through">S</button>
        <button type="button" @click="toggleSuperscript" class="italic"><sup>t</sup></button>
        <button type="button" @click="toggleSubscript" class="italic"><sub>t</sub></button>
      </div>
    </div>

    <!-- Editor Content -->
    <EditorContent v-if="editor" :editor="editor" class="editor-content" />
  </div>
</template>

<style scoped>
.editor-container {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.toolbar {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  background-color: var(--bar-bg);
  padding: 3px;
  border-top-left-radius: var(--tiptap-radius);
  border-top-right-radius: var(--tiptap-radius);
}

.toolbar select,
.toolbar button {
  padding: 5px 10px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background-color: var(--button-bg);
  cursor: pointer;
}

.editor-content {
  border: 1px solid var(--border);
  padding: 10px;
  min-height: 150px;
  max-height: 150px;
  background-color: var(--content-bg);
  color: var(--content-color);
  overflow-y: auto;
  border-bottom-right-radius: var(--tiptap-radius);
  border-bottom-left-radius: var(--tiptap-radius);
}
</style>
