<script setup lang="ts">
import ProjectPageHeadingSection from 'src/components/ProjectPageHeadingSection.vue';
import { pokerGameClock as project } from 'src/data/projects';
</script>

<style lang="sass" scoped>
picture
  display: block
</style>

<template>
  <q-page>
    <ProjectPageHeadingSection :project="project" />

    <div class="flex">
      <q-card class="q-my-lg card text-center">
        <q-card-section>
          <div class="text-h6">Initial State</div>
        </q-card-section>

        <picture>
          <img
            sizes="(max-width: 1200px) 100vw, 1200px"
            srcset="
              images/game-clock/start/Game-Clock_start_ovdn3g_c_scale,w_400.jpg   400w,
              images/game-clock/start/Game-Clock_start_ovdn3g_c_scale,w_900.jpg   900w,
              images/game-clock/start/Game-Clock_start_ovdn3g_c_scale,w_1200.jpg 1200w
            "
            src="images/game-clock/start/Game-Clock_start_ovdn3g_c_scale,w_1200.jpg"
            alt=""
          />
        </picture>

        <q-card-section class="q-pt-none">
          This is how the game clock looks on load. All of the data is imported
          from the data.js file. This data.js file can be edited to your own
          needs, however, this game clock was built to be bundled with a desktop
          application. The desktop application dynamically sets the data files
          contents before launching the game clock.
        </q-card-section>
      </q-card>

      <q-card class="q-my-lg card text-center">
        <q-card-section>
          <div class="text-h6">Options Menu</div>
        </q-card-section>

        <picture>
          <img
            sizes="(max-width: 1200px) 100vw, 1200px"
            srcset="
              images/game-clock/options/Game-Clock_options_dbwoaj_c_scale,w_400.jpg   400w,
              images/game-clock/options/Game-Clock_options_dbwoaj_c_scale,w_970.jpg   970w,
              images/game-clock/options/Game-Clock_options_dbwoaj_c_scale,w_1200.jpg 1200w
            "
            src="images/game-clock/options/Game-Clock_options_dbwoaj_c_scale,w_1200.jpg"
            alt=""
          />
        </picture>

        <q-card-section class="q-pt-none">
          The options menu is opened and closed by clicking anywhere on game
          clock. The options allows for the manipulation of the timer, blinds up
          alarm and allows the tournament director to cycle through the current
          blindset and set which chips displayed.
        </q-card-section>
      </q-card>

      <q-card class="q-my-lg card text-center">
        <q-card-section>
          <div class="text-h6">A very long tournament</div>
        </q-card-section>

        <picture>
          <img
            sizes="(max-width: 1200px) 100vw, 1200px"
            srcset="
              images/game-clock/end/Game-Clock_End_qfon9z_c_scale,w_400.jpg   400w,
              images/game-clock/end/Game-Clock_End_qfon9z_c_scale,w_1200.jpg 1200w
            "
            src="images/game-clock/end/Game-Clock_End_qfon9z_c_scale,w_1200.jpg"
            alt=""
          />
        </picture>

        <q-card-section class="q-pt-none">
          If the tournament runs so long there are no longer any blinds
          remaining, the timer is component is removed and the last blind set is
          fixed.
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
