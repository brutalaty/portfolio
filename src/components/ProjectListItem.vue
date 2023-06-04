<template>
  <div class="project-item">
    <h3>{{ project.name }}</h3>
    <div class="project-links">
      <q-btn
        v-if="!!project.external_url"
        data-test="external-link-button"
        outline
        color="primary"
        label="External Link"
        :href="project.external_url"
        target="_blank"
      />
    </div>
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

const props = defineProps({
  project: {
    required: true,
    type: Object as PropType<Project>,
  },
});
</script>
