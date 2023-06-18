<script setup lang="ts">
import ProjectPageHeadingSection from 'src/components/ProjectPageHeadingSection.vue';
import { pokerThickClient as project } from 'src/data/projects';
</script>

<template>
  <q-page>
    <ProjectPageHeadingSection :project="project" />
  </q-page>
</template>
