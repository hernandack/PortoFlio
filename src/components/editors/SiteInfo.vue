<script setup lang="ts">
import PanelGroup from './PanelGroup.vue'
</script>

<template>
  <div class="editor__info">
    <PanelGroup
      heading="Site Information"
      caption="This information will be used for SEO and social media sharing."
    >
      <form class="editor__form flex flex-col gap-2">
        <fieldset class="flex flex-col gap-2">
          <label for="site-title" class="text-sm">Site Title</label>
          <input type="text" id="site-title" name="site-title" class="form-input" />
        </fieldset>
        <fieldset class="flex flex-col gap-2">
          <label for="site-description" class="text-sm">Site Description</label>
          <textarea id="site-description" name="site-description" class="form-textarea"></textarea>
        </fieldset>
        <fieldset class="flex flex-col gap-2">
          <label for="site-keywords" class="text-sm">Site Keywords</label>
          <input type="text" id="site-keywords" name="site-keywords" class="form-input" />
        </fieldset>
      </form>
    </PanelGroup>
  </div>
</template>
