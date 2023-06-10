<template>
  <q-chip class="technology-item" :style="style" :clickable="false" square>
    {{ technology.name }}
  </q-chip>
</template>

<script setup lang="ts">
import Technology from 'src/types/technology';
import { PropType, computed } from 'vue';

const props = defineProps({
  technology: {
    required: true,
    type: Object as PropType<Technology>,
  },
});

const style = computed(() => {
  const color = props.technology.color;
  return `color: ${color};border-color: ${color}`;
});
// const style = computed(() => {
//   const backgroundColor = `background-color: ${props.technology.backgroundColor}`;
//   const textColor = `color: ${props.technology.textColor}`;
//   const style = `${backgroundColor}; ${textColor}`;
//   return style;
// });
</script>

<style lang="sass">
.technology-item
  font-size: 13px
  font-weight: bold
  background: $accent
  border: 1px solid
</style>
