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
        <template v-slot:heading> Loading Screen </template>

        <template v-slot:description>
          here is some description of the loading flash screen
        </template>

        <template v-slot:image>
          <img
            class="project-page-card__image"
            sizes="(max-width: 531px) 100vw, 531px"
            srcset="
              images/poker-thick-client/load-screen/load-splash-screen_oez6ie_c_scale,w_200.png 200w,
              images/poker-thick-client/load-screen/load-splash-screen_oez6ie_c_scale,w_399.png 399w,
              images/poker-thick-client/load-screen/load-splash-screen_oez6ie_c_scale,w_531.png 531w
            "
            src="images/poker-thick-client/load-screen/load-splash-screen_oez6ie_c_scale,w_531.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <ProjectPageCard>
        <template v-slot:heading>Main Menu</template>
        <template v-slot:description
          >here is some description of the Main Menu</template
        >
        <template v-slot:image>
          <img
            sizes="(max-width: 738px) 100vw, 738px"
            srcset="
              images/poker-thick-client/main-menu/main-screen_ylbcb1_c_scale,w_300.png 300w,
              images/poker-thick-client/main-menu/main-screen_ylbcb1_c_scale,w_738.png 738w
            "
            src="images/poker-thick-client/main-menu/main-screen_ylbcb1_c_scale,w_738.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <ProjectPageCard>
        <template v-slot:heading>Synchronisation</template>
        <template v-slot:description
          >here is some description of the Synchronisation screen</template
        >
        <template v-slot:image>
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
