<template>
  <q-btn
    data-test="repository-link-button"
    :href="url"
    target="_blank"
    class="button button-github"
  >
    Repo
    <img
      class="button-icon-right button-icon-svg"
      src="images/github-mark/github-mark-white.svg"
    />
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
</style>
