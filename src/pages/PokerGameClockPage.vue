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

    <div class="flex flex-center">
      <div class="project-page-card">
        <img
          class="project-page-card-image"
          sizes="(max-width: 1200px) 100vw, 1200px"
          srcset="
            images/game-clock/start/Game-Clock_start_ovdn3g_c_scale,w_400.jpg   400w,
            images/game-clock/start/Game-Clock_start_ovdn3g_c_scale,w_900.jpg   900w,
            images/game-clock/start/Game-Clock_start_ovdn3g_c_scale,w_1200.jpg 1200w
          "
          src="images/game-clock/start/Game-Clock_start_ovdn3g_c_scale,w_1200.jpg"
          alt=""
        />

        <div class="project-page-card-body">
          <h6 class="project-page-card-heading">Initial State</h6>

          <div class="project-page-card-description">
            This is how the game clock looks on load. All of the data is
            imported from the data.js file. This data.js file can be edited to
            your own needs, however, this game clock was built to be bundled
            with a desktop application. The desktop application dynamically sets
            the data files contents before launching the game clock.
          </div>
        </div>
      </div>

      <div class="project-page-card">
        <img
          class="project-page-card-image"
          sizes="(max-width: 1200px) 100vw, 1200px"
          srcset="
            images/game-clock/options/Game-Clock_options_dbwoaj_c_scale,w_400.jpg   400w,
            images/game-clock/options/Game-Clock_options_dbwoaj_c_scale,w_970.jpg   970w,
            images/game-clock/options/Game-Clock_options_dbwoaj_c_scale,w_1200.jpg 1200w
          "
          src="images/game-clock/options/Game-Clock_options_dbwoaj_c_scale,w_1200.jpg"
          alt=""
        />

        <div class="project-page-card-body">
          <h6 class="project-page-card-heading">Options Menu</h6>

          <div class="project-page-card-description">
            The options menu is opened and closed by clicking anywhere on game
            clock. The options allows for the manipulation of the timer, blinds
            up alarm and allows the tournament director to cycle through the
            current blindset and set which chips displayed.
          </div>
        </div>
      </div>

      <div class="project-page-card">
        <img
          class="project-page-card-image"
          sizes="(max-width: 1200px) 100vw, 1200px"
          srcset="
            images/game-clock/end/Game-Clock_End_qfon9z_c_scale,w_400.jpg   400w,
            images/game-clock/end/Game-Clock_End_qfon9z_c_scale,w_1200.jpg 1200w
          "
          src="images/game-clock/end/Game-Clock_End_qfon9z_c_scale,w_1200.jpg"
          alt=""
        />

        <div class="project-page-card-body">
          <h6 class="project-page-card-heading">A very long tournament</h6>
          <div class="project-page-card-description">
            If the tournament runs so long there are no longer any blinds
            remaining, the timer is component is removed and the last blind set
            is fixed.
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
