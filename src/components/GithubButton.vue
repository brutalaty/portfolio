<template>
  <q-btn
    data-test="repository-link-button"
    :href="url"
    target="_blank"
    rounded
    dense
    color="white"
    size="13px"
    class="github-button q-pa-none no-border"
  >
    <img class="github-mark" src="images/github-mark/github-mark.svg" />
  </q-btn>
</template>

<script setup lang="ts">
defineProps({
  url: {
    required: true,
    type: String,
  },
});
</script>

<style lang="sass">
.github-mark
  margin: -1px
  width: 30px
</style>
