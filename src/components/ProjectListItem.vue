<template>
  <q-card dark>
    <div class="project-heading">
      <q-card-section class="">
        <h3 class="text-h4 text-center">
          {{ project.name }}
        </h3>
      </q-card-section>
      <ProjectNavigationBar :project="project" class="flex justify-center" />

      <q-card-section class="project-description">
        {{ project.description }}
      </q-card-section>

      <q-card-section class="flex justify-center">
        <TechnologyList :technologies="project.technologies" />
      </q-card-section>
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue';
import { Project } from 'src/types/project';
import TechnologyList from './TechnologyList.vue';

import ProjectNavigationBar from './ProjectNavigationBar.vue';

const props = defineProps({
  project: {
    required: true,
    type: Object as PropType<Project>,
  },
});

const hasNavigationLinks = computed(() => {
  return (
    !!props.project.route_name ||
    !!props.project.external_url ||
    !!props.project.repository
  );
});
</script>

<style lang="sass"></style>
