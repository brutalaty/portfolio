<template>
  <q-btn
    data-test="repository-link-button"
    :href="url"
    target="_blank"
    label="Repo"
    icon-right="img:images/github-mark/github-mark-white.svg"
    class="button button-github"
  >
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
.button-github
  background: #161b22
  .q-icon
    font-size: 1.4rem
</style>
