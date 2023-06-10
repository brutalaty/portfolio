<template>
  <div class="project-links">
    <div class="project-links__left">
      <ButtonGitHub v-if="!!project.repository" :url="project.repository" />
    </div>
    <div class="project-links__right">
      <ButtonMore v-if="!!project.route_name" @click="handleRouteButtonClick" />

      <ButtonWebsite
        v-if="!!project.external_url"
        :href="project.external_url"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, Router } from 'vue-router';
import { Project } from 'src/types/project';
import ButtonGitHub from './buttons/ButtonGitHub.vue';
import ButtonWebsite from './buttons/ButtonWebsite.vue';
import ButtonMore from './buttons/ButtonMore.vue';

const router: Router = useRouter();

interface Props {
  project: Project;
}

const props = defineProps<Props>();

function handleRouteButtonClick() {
  if (!!props.project.route_name)
    router.push({ name: props.project.route_name });
}
</script>

<style lang="sass">
.project-links
  display: flex
  gap: 10px
</style>
