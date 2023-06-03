<template>
  <div class="technology-list">
    <TechnologyListItem
      v-for="technology in technologies"
      :technology="technology"
      :key="technology.name"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import TechnologyListItem from './TechnologyListItem.vue';
import Technology from 'src/types/technology';

const props = defineProps({
  technologies: {
    required: true,
    type: Array as PropType<Technology[]>,
  },
});
</script>
