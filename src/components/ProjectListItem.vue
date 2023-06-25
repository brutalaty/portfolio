<template>
  <div class="project-item-card">
    <h3 class="project-item-card__heading text-h4">
      {{ project.name }}
    </h3>

    <TechnologyList
      :technologies="project.technologies"
      class="project-item-card__technologies"
    />

    <div class="project-item-card__description">
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
