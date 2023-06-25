<script setup lang="ts">
import ProjectPageHeadingSection from 'src/components/ProjectPageHeadingSection.vue';
import ProjectPageCard from 'src/components/ProjectPageCard.vue';
import { pokerThickClient as project } from 'src/data/projects';
</script>

<template>
  <q-page>
    <ProjectPageHeadingSection :project="project" />

    <div class="flex flex-center">
      <ProjectPageCard>
        <template #heading> Loading Screen </template>

        <template #description>
          here is some description of the loading flash screen
        </template>

        <template #image>
          <img
            sizes="(max-width: 531px) 100vw, 531px"
            srcset="
              images/poker-thick-client/load-screen/load-splash-screen_nfi2fm_c_scale,w_308.png 308w,
              images/poker-thick-client/load-screen/load-splash-screen_nfi2fm_c_scale,w_449.png 449w,
              images/poker-thick-client/load-screen/load-splash-screen_nfi2fm_c_scale,w_531.png 531w
            "
            src="images/poker-thick-client/load-screen/load-splash-screen_nfi2fm_c_scale,w_531.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <ProjectPageCard>
        <template #heading>Main Menu</template>
        <template #description
          >here is some description of the Main Menu</template
        >
        <template #image>
          <img
            sizes="(max-width: 738px) 100vw, 738px"
            srcset="
              images/poker-thick-client/main-menu/main-menu_308.png 308w,
              images/poker-thick-client/main-menu/main-menu_738.png 738w
            "
            src="images/poker-thick-client/main-menu/main-menu_738.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <ProjectPageCard>
        <template #heading>Synchronisation</template>
        <template #description
          >here is some description of the Synchronisation screen</template
        >
        <template #image>
          <img
            class="project-page-card__image"
            sizes="(max-width: 751px) 100vw, 751px"
            srcset="
              images/poker-thick-client/sync-screen/sync-start_v3cqme_c_scale,w_300.png 300w,
              images/poker-thick-client/sync-screen/sync-start_v3cqme_c_scale,w_751.png 751w
            "
            src="images/poker-thick-client/sync-screen/sync-start_v3cqme_c_scale,w_751.png"
            alt=""
          />
        </template>
      </ProjectPageCard>
    </div>
  </q-page>
</template>
