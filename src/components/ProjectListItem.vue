<template>
  <div class="project-item">
    <h3 class="project-heading text-h4">
      {{ project.name }}
    </h3>

    <TechnologyList
      :technologies="project.technologies"
      class="project-technologies"
    />

    <div class="project-description">
      {{ project.description }}
    </div>

    <ProjectItemNavigation :project="project" class="project-navigation" />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Project } from 'src/types/project';
import TechnologyList from './TechnologyList.vue';

import ProjectItemNavigation from './ProjectItemNavigation.vue';

defineProps({
  project: {
    required: true,
    type: Object as PropType<Project>,
  },
});
</script>

<style lang="sass">

.project-item
  background: darken($light-page, 2%)
  width: 30rem
  min-width: min(30rem, 100vw)
  display: flex
  flex-direction: column
  border-radius: 5px
  padding: 2rem
  margin: 1rem
  justify-content: between
  gap: .5rem

.project-heading
  font-weight: 300
  text-align: center
  margin: 1.5rem 0 .5rem 0

.project-technologies
  display: flex
  justify-content: center

.project-description
  line-height: 2
  margin: 3rem 1.5rem
  flex-grow: 2

.project-navigation
  justify-content: space-between
  & .button
    min-width: 10rem
  & .button-more, .button-website
    flex-order: 4
</style>
