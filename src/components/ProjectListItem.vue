<template>
  <div class="project-item">
    <h3>{{ project.name }}</h3>
    <ProjectNavigationBar :project="project" />
    <div class="project-description">
      {{ project.description }}
    </div>
    <TechnologyList :technologies="project.technologies" />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Project } from 'src/types/project';
import TechnologyList from './TechnologyList.vue';

import ProjectNavigationBar from './ProjectNavigationBar.vue';

defineProps({
  project: {
    required: true,
    type: Object as PropType<Project>,
  },
});
</script>
