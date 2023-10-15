<script setup lang="ts">
import ProjectPageHeadingSection from 'src/components/ProjectPageHeadingSection.vue';
import ProjectPageCard from 'src/components/ProjectPageCard.vue';
import InfoCard from 'src/components/InfoCard.vue';

import { PTPerfect as project } from 'src/data/projects';
</script>

<template>
  <q-page>
    <ProjectPageHeadingSection :project="project" />
    <div class="flex flex-center">
      <!-- Login -->
      <ProjectPageCard>
        <template #heading> git init </template>
        <template #description>
          <p>This project was started sometime early 2020.</p>
        </template>

        <template #figure="{ sizes }">
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/01-login_zjesup_c_scale,w_350.png   350w,
              images/ptperfect/01-login_zjesup_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/01-login_zjesup_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!--  -->

      <!-- Dashboard -->
      <ProjectPageCard>
        <template #description> </template>

        <template #figure="{ sizes }">
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/02-trainer-dash_sptzdt_c_scale,w_350.png   350w,
              images/ptperfect/02-trainer-dash_sptzdt_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/02-trainer-dash_sptzdt_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- Invite -->
      <ProjectPageCard>
        <template #description> </template>

        <template #figure="{ sizes }">
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/03-invite_toycih_c_scale,w_350.png   350w,
              images/ptperfect/03-invite_toycih_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/03-invite_toycih_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- Email -->
      <ProjectPageCard>
        <template #description> </template>

        <template #figure="{ sizes }">
          <figcaption>Invitation Email</figcaption>
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/04-email_moarkr_c_scale,w_350.png 350w,
              images/ptperfect/04-email_moarkr_c_scale,w_750.png 750w
            "
            src="images/ptperfect/04-email_moarkr_c_scale,w_750.png"
          />
        </template>
      </ProjectPageCard>

      <!-- Movements -->
      <ProjectPageCard>
        <template #description> </template>

        <template #figure="{ sizes }">
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/06-movements_rznosq_c_scale,w_350.png   350w,
              images/ptperfect/06-movements_rznosq_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/06-movements_m5lxs9_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- Equipment Index -->
      <ProjectPageCard>
        <template #description> </template>

        <template #figure="{ sizes }">
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/07-equipment-index_jf5ytn_c_scale,w_350.png   350w,
              images/ptperfect/07-equipment-index_jf5ytn_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/07-equipment-index_jf5ytn_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- Equipment Show -->
      <ProjectPageCard>
        <template #description> </template>

        <template #figure="{ sizes }">
          <figcaption>Equipment Show</figcaption>
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/08-equipment-show_mtdksv_c_scale,w_350.png   350w,
              images/ptperfect/08-equipment-show_mtdksv_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/08-equipment-show_mtdksv_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- Equipment Edit -->
      <ProjectPageCard>
        <template #description> </template>

        <template #figure="{ sizes }">
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/09-equipment-edit_nh8fsl_c_scale,w_350.png   350w,
              images/ptperfect/09-equipment-edit_nh8fsl_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/09-equipment-edit_nh8fsl_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- Videos -->
      <ProjectPageCard>
        <template #description> </template>

        <template #figure="{ sizes }">
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/10-videos-index_h3ojuu_c_scale,w_350.png   350w,
              images/ptperfect/10-videos-index_h3ojuu_c_scale,w_559.png   559w,
              images/ptperfect/10-videos-index_h3ojuu_c_scale,w_724.png   724w,
              images/ptperfect/10-videos-index_h3ojuu_c_scale,w_871.png   871w,
              images/ptperfect/10-videos-index_h3ojuu_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/10-videos-index_h3ojuu_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- Videos Show -->
      <ProjectPageCard>
        <template #description> </template>

        <template #figure="{ sizes }">
          <figcaption>Videos Show</figcaption>
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/11-videos-show_nxqxw6_c_scale,w_350.png   350w,
              images/ptperfect/11-videos-show_nxqxw6_c_scale,w_563.png   563w,
              images/ptperfect/11-videos-show_nxqxw6_c_scale,w_726.png   726w,
              images/ptperfect/11-videos-show_nxqxw6_c_scale,w_879.png   879w,
              images/ptperfect/11-videos-show_nxqxw6_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/11-videos-show_nxqxw6_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- Videos Edit -->
      <ProjectPageCard>
        <template #description> </template>

        <template #figure="{ sizes }">
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/12-videos-edit_r3bcct_c_scale,w_350.png   350w,
              images/ptperfect/12-videos-edit_r3bcct_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/12-videos-edit_r3bcct_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- Blueptints -->
      <ProjectPageCard>
        <template #description> </template>

        <template #figure="{ sizes }">
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/13-blueprints-index_gvfhss_c_scale,w_350.png   350w,
              images/ptperfect/13-blueprints-index_gvfhss_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/13-blueprints-index_gvfhss_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- Blueprints Show -->
      <ProjectPageCard>
        <template #description> </template>

        <template #figure="{ sizes }">
          <figcaption>Blueprints Show</figcaption>
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/14-blueprints-show_mfe05r_c_scale,w_350.png   350w,
              images/ptperfect/14-blueprints-show_mfe05r_c_scale,w_582.png   582w,
              images/ptperfect/14-blueprints-show_mfe05r_c_scale,w_755.png   755w,
              images/ptperfect/14-blueprints-show_mfe05r_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/14-blueprints-show_mfe05r_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- Regimen Edit -->
      <ProjectPageCard>
        <template #description> </template>

        <template #figure="{ sizes }">
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/15-regimens-edit_rhllxv_c_scale,w_350.png   350w,
              images/ptperfect/15-regimens-edit_rhllxv_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/15-regimens-edit_rhllxv_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- Blueprints Clone Show -->
      <ProjectPageCard>
        <template #description> </template>

        <template #figure="{ sizes }">
          <figcaption>Blueprints Clone Selection</figcaption>
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/16-blueprints-clone-show_lawyct_c_scale,w_350.png   350w,
              images/ptperfect/16-blueprints-clone-show_lawyct_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/16-blueprints-clone-show_lawyct_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- Blueprints Clone Show Dialog -->
      <ProjectPageCard>
        <template #description> </template>

        <template #figure="{ sizes }">
          <figcaption>Clone Selection Dialog</figcaption>
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/17-blueprints-clone-show-dialog_yn8omn_c_scale,w_350.png   350w,
              images/ptperfect/17-blueprints-clone-show-dialog_yn8omn_c_scale,w_830.png   830w,
              images/ptperfect/17-blueprints-clone-show-dialog_yn8omn_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/17-blueprints-clone-show-dialog_yn8omn_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- Blueprints Clone Show Dialog -->
      <ProjectPageCard>
        <template #description> </template>

        <template #figure="{ sizes }">
          <figcaption>Clone Selection Dialog</figcaption>
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/17-blueprints-clone-show-dialog_yn8omn_c_scale,w_350.png   350w,
              images/ptperfect/17-blueprints-clone-show-dialog_yn8omn_c_scale,w_830.png   830w,
              images/ptperfect/17-blueprints-clone-show-dialog_yn8omn_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/17-blueprints-clone-show-dialog_yn8omn_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- Blueprints Clone Edit -->
      <ProjectPageCard>
        <!-- <template #heading></template> -->
        <template #description
          >Still fixing the UI after migrating 3 version of Laravel</template
        >

        <template #figure="{ sizes }">
          <figcaption>Clone Edit</figcaption>
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/18-blueprints-clone-edit_exsddg_c_scale,w_350.png   350w,
              images/ptperfect/18-blueprints-clone-edit_exsddg_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/18-blueprints-clone-edit_exsddg_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- Regimens Show Edit Dialog -->
      <ProjectPageCard>
        <template #description> </template>

        <template #figure="{ sizes }">
          <figcaption>Edit Routine Dialog</figcaption>
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/19-regimen-show-dialog_z3kfsv_c_scale,w_350.png   350w,
              images/ptperfect/19-regimen-show-dialog_z3kfsv_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/19-regimen-show-dialog_z3kfsv_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- Routine Edit -->
      <ProjectPageCard>
        <template #description> </template>

        <template #figure="{ sizes }">
          <figcaption>Routine Edit</figcaption>
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/20-routine-edit_jasal9_c_scale,w_350.png   350w,
              images/ptperfect/20-routine-edit_jasal9_c_scale,w_644.png   644w,
              images/ptperfect/20-routine-edit_jasal9_c_scale,w_1000.png 1000w
            "
            src="images/ptperfect/20-routine-edit_jasal9_c_scale,w_1000.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- DB Relations -->
      <ProjectPageCard>
        <template #description>
        <p>
          While not representing the database in it's entirety, it helps
          illustrate the relations between Users and Blueprints and why it is possible to clone from Blueprints to Users.
        </p>
        </template>

        <template #figure="{ sizes }">
          <figcaption>Simplified DB Relations</figcaption>
          <img
            :sizes="sizes"
            srcset="
              images/ptperfect/ptperfect_relations_simplified_bdsdk3_c_scale,w_200.jpg 200w,
              images/ptperfect/ptperfect_relations_simplified_bdsdk3_c_scale,w_457.jpg 457w,
              images/ptperfect/ptperfect_relations_simplified_bdsdk3_c_scale,w_656.jpg 656w,
              images/ptperfect/ptperfect_relations_simplified_bdsdk3_c_scale,w_667.jpg 667w
            "
            src="images/ptperfect/ptperfect_relations_simplified_bdsdk3_c_scale,w_667.jpg"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <!-- Tests -->
      <ProjectPageCard>
        <template #description
          >The incomplete tests are related to client onboarding. They are there
          to help remind me where I am up to.</template
        >

        <template #figure="{ sizes }">
          <figcaption>Backend Tests</figcaption>
          <img
            :sizes="sizes"
            src="images/ptperfect/21-tests_lyug0p.png"
            alt=""
          />
        </template>
      </ProjectPageCard>
    </div>
  </q-page>
</template>

<style lang="scss" scoped></style>
