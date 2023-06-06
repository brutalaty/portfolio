<template>
  <div class="project-links">
    <q-btn
      v-if="showHomeButton"
      data-test="home-link-button"
      icon="fa-solid fa-house"
      color="primary"
      rounded
      dense
      size="8px"
      padding="7px"
      class="q-mr-md"
      @click="handleHomeButtonClick"
    />

    <q-btn
      v-else-if="!!project.route_name"
      data-test="router-link-button"
      icon="fa-solid fa-info"
      color="primary"
      rounded
      dense
      size="8px"
      padding="7px"
      class="q-mr-md"
      @click="handleRouteButtonClick"
    />

    <GithubButton v-if="!!project.repository" :url="project.repository" />

    <q-btn
      v-if="!!project.external_url"
      data-test="external-link-button"
      color="primary"
      icon="fa-solid fa-up-right-from-square"
      rounded
      dense
      size="8px"
      padding="7px"
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

<style lang="sass" scoped></style>
