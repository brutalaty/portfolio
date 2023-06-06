<template>
  <q-page class="">
    <h1>Joshua Ditton</h1>
    <section>
      <div v-for="projectGroup in projectGroups" :key="projectGroup.title">
        <h2 data-test="project-group-heading" class="text-center">
          {{ projectGroup.title }}
        </h2>
        <ProjectList :projects="projectGroup.projects" />
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import ProjectList from 'src/components/ProjectList.vue';
import projectGroups from 'src/data/projects';
</script>
