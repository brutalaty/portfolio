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
          <p>
            PTPerfect is the projects name while in development and although it
            has a nice ring to it, it's a little ambiguous.
          </p>
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

      <!-- Delay Note -->
      <InfoCard
        ><p>
          Five months after starting Ptperfect, For personal reasons it had to
          be shelved.
        </p>
        <p class="q-mb-none">
          <strong>2+ years later</strong>, I now have some spare time and I'm
          back to developing this project.
        </p></InfoCard
      >

      <!-- Dashboard -->
      <ProjectPageCard>
        <template #description
          >The dashboard is very basic, once more or all of the trainers
          features have been implemented, the dash will be redesigned.</template
        >

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

      <!-- Migration Note -->
      <InfoCard>
        The tech industry moves fast, in the time this project was shelved,
        Laravel had managed to move 3 major releases ahead of Ptperfect.
      </InfoCard>

      <!-- Invite -->
      <ProjectPageCard>
        <template #description
          >Settling for the minimal viable product, Ptperfect will be invite
          only</template
        >

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

      <InfoCard>
        <p>
          Aside from having to migrate from Laravel 7 up to Laravel 10, a lot of
          the projects dependencies had become abandoned.
        </p>
        <p>
          Updating dependencies, finding alternatives and implementing my own
          solutions took quite some time.
        </p>
      </InfoCard>

      <!-- Email -->
      <ProjectPageCard>
        <template #description
          >Here we have a preview of the E-Mail sent to our friendly client
          asdasd. He will be asked to set a password to start using his
          account.</template
        >

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
        <template #description></template>

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
        <template #description>
          <p>* not yet redesigned.</p>
        </template>

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
        <template #description>
          <p>
            A trainer can reorder the regimen for a client or blueprint and can
            transfer ownership(under revision).
          </p>
          <p>* Not yet redesigned.</p>
        </template>

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
        <template #description>
          <p>
            Blueprints have the soul purpose of being cloned onto clients
            regimens. Trainers can setup a blueprint for common problems and
            clone them onto a client who has a similar issue and then make
            adjustments.
          </p>

          <p>Blueprints can also be cloned onto other blueprints.</p>
        </template>

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
        <!-- <template #description> </template> -->

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
        <template #description
          >Each Program (or fortnight) has 2 Routines attached and are meant to
          be alternated each day. When a Trainer selects Edit on a Program, they
          get the option of which routine they want to edit.</template
        >

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
        <template #description>
          <p>* not yet redesigned.</p>
        </template>

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
            illustrate the relations between Users and Blueprints and why it is
            possible to clone from Blueprints to Users.
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
          >The incomplete tests are related to client onboarding, which is not
          yet implemented. They are there to help remind which feature/'s I'm up
          to implementing.</template
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
