<script setup>
//below 1024 window, image is 100w
// at >= 1024 window width. image is 51w
//1024px * .51 w
</script>

<template>
  <div class="project-page-card">
    <figure class="project-page-card__figure">
      <slot name="figure" sizes="(min-width: 1024) 51w, 100w">
        <figcaption>
          Project Page Card requires an <img /> in the image slot
        </figcaption>
        <img alt="Project Page Card requires an <img> in the image slot" />
      </slot>
    </figure>

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
@use "sass:math"
$card-background: darken($light-page, 5%)
.project-page-card
  $image-max-width-percent: 51
  display: flex
  flex-direction: column
  width: 100%
  max-width: $max-width * ($image-max-width-percent / 100)
  background: $card-background
  border-radius: $card-border-radius
  margin: 2rem 0
  overflow: hidden
  align-items: center

  &_default-image
    text-align: center

  & figure
    width: 100%
    margin: 0
    padding: 0
    position: relative

  & figcaption
    width:100%
    font-size: 1.4rem
    text-align: center
    background: $card-background
    padding: .3rem 0

  & img
    display: block
    width: 100%
    border-radius: $card-border-radius
    box-shadow: 0 0 15px black

  &__body
    padding: 2rem 1rem

  &__heading
    margin: 0
    padding: 0rem
    text-align: center

  &__description
    line-height: 2
    padding: 1rem

  @media(min-width: $breakpoint-md-min)
    max-width: 100%
    flex-direction: row
    &:nth-child(even of .project-page-card)
      flex-direction: row-reverse

    & img
      width: math.percentage($image-max-width-percent / 100)

    & figure
      width: math.percentage($image-max-width-percent / 100)
      & img
        width: 100%

    &__body
      width: math.percentage((100 - $image-max-width-percent) / 100)
      text-align: center
</style>
