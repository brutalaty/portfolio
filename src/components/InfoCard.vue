<template>
  <aside class="info-card">
    <i class="fa-solid fa-circle-info info-card-icon"> </i>
    <slot> Info goes here </slot>
  </aside>
</template>

<style lang="sass">
.info-card
    position: relative
    margin: 1rem
    padding: 3.5rem 1.5rem 2.5rem 2rem
    padding-left: 3.5rem
    width: 100%
    max-width: 80ch
    border-radius: 2rem .3rem .3rem .3rem
    box-shadow: 4px 4px 10px darken($dark-page, 7)

    &-icon
        color: $info
        font-size: 2.2rem
        position: absolute
        top: .7rem
        left: .7rem
</style>
