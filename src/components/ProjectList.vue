<template>
  <div class="project-list flex row justify-around q-gutter-y-xl items-start">
    <ProjectListItem
      v-for="project in projects"
      :project="project"
      :key="project.name"
      class="col-12 col-md-5"
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

<style lang="sass">
.project-list
  margin-bottom: 5rem
</style>
