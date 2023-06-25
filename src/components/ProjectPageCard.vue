<template>
  <div class="project-page-card">
    <slot name="image"
      ><img
        alt="Project Page Card requires an <img> in the image slot"
        class="project-page-card__default-image"
    /></slot>

    <div class="project-page-card__body">
      <h6 class="project-page-card__heading">
        <slot name="heading"></slot>
      </h6>

      <div class="project-page-card__description">
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.project-page-card__default-image
  text-align: center
</style>
