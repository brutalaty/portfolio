<template>
  <div class="project-links">
    <ButtonBack @click="handleHomeButtonClick" />

    <ButtonGitHub v-if="!!project.repository" :url="project.repository" />

    <ButtonWebsite v-if="!!project.external_url" :href="project.external_url" />
  </div>
</template>

<script setup lang="ts">
import { useRouter, Router } from 'vue-router';
import { Project } from 'src/types/project';
import ButtonGitHub from './buttons/ButtonGitHub.vue';
import ButtonBack from './buttons/ButtonBack.vue';
import ButtonWebsite from './buttons/ButtonWebsite.vue';

const router: Router = useRouter();

interface Props {
  project: Project;
}

defineProps<Props>();

function handleHomeButtonClick() {
  router.push('/');
}
</script>

<style lang="sass">
.project-links
  display: flex
  gap: 10px
</style>
