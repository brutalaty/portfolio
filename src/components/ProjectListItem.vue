<template>
  <div class="project-item-card">
    <h3 class="project-item-card__heading text-h4">
      {{ project.name }}
    </h3>

    <TechnologyList
      :technologies="project.technologies"
      class="project-item-card__technologies"
    />

    <div class="project-item-card__description" data-test="project-description">
      {{ project.description }}
    </div>

    <ProjectItemNavigation
      :project="project"
      class="project-item-card__navigation"
    />
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
.project-item-card
  background: darken($light-page, 2%)
  width: 30rem
  min-width: min(30rem, 100vw)
  display: flex
  flex-direction: column
  border-radius: $card-border-radius
  padding: 2rem
  margin: 1rem
  justify-content: between
  gap: .5rem

  &__heading
    font-weight: 300
    text-align: center
    margin: 1.5rem 0 .5rem 0

  &__technologies
    display: flex
    justify-content: center

  &__description
    line-height: 2
    margin: 3rem 1.5rem
    flex-grow: 2

  &__navigation
    justify-content: space-between
    & .button
      min-width: 10rem
    & .button-more, .button-website
      flex-order: 4
</style>
