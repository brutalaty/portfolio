<template>
  <div class="project-links">
    <q-btn
      v-if="showHomeButton"
      data-test="home-link-button"
      icon="fa-solid fa-house"
      @click="handleHomeButtonClick"
    />

    <q-btn
      v-else-if="!!project.route_name"
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
</template>

<script setup lang="ts">
import { useRouter, Router } from 'vue-router';
import { Project } from 'src/types/project';
import GithubButton from './GithubButton.vue';

const router: Router = useRouter();

interface Props {
  project: Project;
  showHomeButton?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showHomeButton: false,
});

function handleRouteButtonClick() {
  if (!!props.project.route_name)
    router.push({ name: props.project.route_name });
}

function handleHomeButtonClick() {
  router.push('/');
}
</script>
