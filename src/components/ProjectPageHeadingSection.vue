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
  <header>
    <h1>{{ project.name }}</h1>
    <TechnologyList :technologies="project.technologies" />
    <ProjectPageNavigation :project="project" />
  </header>
</template>

<style lang="sass"></style>
