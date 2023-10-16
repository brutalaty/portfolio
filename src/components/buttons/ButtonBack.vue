<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Back',
  },
});
</script>

<template>
  <q-btn
    data-test="home-link-button"
    class="button button-home"
    color="primary"
    :label="label"
    icon="fa-solid fa-arrow-left"
  >
  </q-btn>
</template>

<style lang="sass">
.button-home .q-icon
  font-size: 1.1rem
</style>
