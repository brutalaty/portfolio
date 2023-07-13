<script setup lang="ts">
import ProjectList from 'src/components/ProjectList.vue';
import projectGroups from 'src/data/projects';
</script>

<template>
  <q-page>
    <h1>Joshua Ditton</h1>
    <section v-for="projectGroup in projectGroups" :key="projectGroup.title">
      <h2
        data-test="project-group-heading"
        class="project-group-heading text-center"
      >
        {{ projectGroup.title }}
      </h2>
      <ProjectList :projects="projectGroup.projects" />
    </section>
  </q-page>
</template>

<style lang="sass">
.project-group-heading
  margin: 2rem 0
  padding: 2rem 0
</style>
