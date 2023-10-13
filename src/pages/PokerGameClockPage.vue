<script setup lang="ts">
import ProjectPageHeadingSection from 'src/components/ProjectPageHeadingSection.vue';
import ProjectPageCard from 'src/components/ProjectPageCard.vue';
import { pokerGameClock as project } from 'src/data/projects';
</script>

<style lang="sass" scoped>
picture
  display: block
</style>

<template>
  <q-page>
    <ProjectPageHeadingSection :project="project" />

    <div class="flex flex-center">
      <ProjectPageCard>
        <template #heading>Initial State</template>
        <template #description>
          This is how the game clock looks on load. All of the data is imported
          from the data.js file. This data.js file can be edited to your own
          needs, however, this game clock was built to be bundled with a desktop
          application. The desktop application dynamically sets the data files
          contents before launching the game clock.
        </template>
        <template #figure="{ sizes }">
          <img
            :sizes="sizes"
            srcset="
              images/game-clock/start/Game-Clock_start_400.jpg   400w,
              images/game-clock/start/Game-Clock_start_900.jpg   900w,
              images/game-clock/start/Game-Clock_start_1200.jpg 1200w
            "
            src="images/game-clock/start/Game-Clock_start_1200.jpg"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <ProjectPageCard>
        <template #heading>Options Menu</template>
        <template #description>
          The options menu is opened and closed by clicking anywhere on game
          clock. The options allows for the manipulation of the timer, blinds up
          alarm and allows the tournament director to cycle through the current
          blindset and set which chips displayed.
        </template>
        <template #figure="{ sizes }">
          <img
            :sizes="sizes"
            srcset="
              images/game-clock/options/Game-Clock_options_400.jpg   400w,
              images/game-clock/options/Game-Clock_options_970.jpg   970w,
              images/game-clock/options/Game-Clock_options_1200.jpg 1200w
            "
            src="images/game-clock/options/Game-Clock_options_1200.jpg"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <ProjectPageCard>
        <template #heading>A very long tournament</template>
        <template #description>
          If the tournament runs so long that there are no longer any blinds
          remaining, the timer component is removed and the last blind set is
          used indefinitely.
        </template>
        <template #figure="{ sizes }">
          <img
            :sizes="sizes"
            srcset="
              images/game-clock/end/Game-Clock_end_400.jpg   400w,
              images/game-clock/end/Game-Clock_end_1200.jpg 1200w
            "
            src="images/game-clock/end/Game-Clock_end_1200.jpg"
            alt=""
          />
        </template>
      </ProjectPageCard>
    </div>
  </q-page>
</template>
