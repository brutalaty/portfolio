<script setup lang="ts">
import { PropType } from 'vue';
import { Project } from 'src/types/project';
import TechnologyList from './TechnologyList.vue';
import ProjectPageNavigation from './ProjectPageNavigation.vue';

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});
</script>

<template>
  <header class="project-page_header">
    <h1 class="project-page_heading">{{ project.name }}</h1>
    <TechnologyList
      class="project-page_tech"
      :technologies="project.technologies"
    />
    <ProjectPageNavigation class="project-page_nav" :project="project" />
  </header>
</template>

<style lang="sass">
.project-page
  &_header
    display: flex
    flex-direction: column
    align-items: center
  &_heading
    margin-bottom: 0
  &_tech
    margin-bottom: 1rem
  &_nav
</style>
