<template>
  <div class="project-list">
    <ProjectListItem
      v-for="project in projects"
      :project="project"
      :key="project.name"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Project } from 'src/types/project';
import ProjectListItem from './ProjectListItem.vue';

defineProps({
  projects: {
    required: true,
    type: Array as PropType<Project[]>,
  },
});
</script>
