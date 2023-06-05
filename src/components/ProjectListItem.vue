<template>
  <div class="project-item">
    <h3>{{ project.name }}</h3>
    <div class="project-links">
      <q-btn
        v-if="!!project.route_name"
        data-test="router-link-button"
        label="More"
        color="primary"
        @click="handleRouteButtonClick"
      />

      <GithubButton v-if="!!project.repository" :url="project.repository" />

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
import { useRouter, Router } from 'vue-router';
import { PropType } from 'vue';
import { Project } from 'src/types/project';
import TechnologyList from './TechnologyList.vue';
import GithubButton from './GithubButton.vue';

const router: Router = useRouter();

const props = defineProps({
  project: {
    required: true,
    type: Object as PropType<Project>,
  },
});

function handleRouteButtonClick() {
  if (!!props.project.route_name)
    router.push({ name: props.project.route_name });
}
</script>
