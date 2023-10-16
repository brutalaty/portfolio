<script setup lang="ts">
import ProjectPageHeadingSection from 'src/components/ProjectPageHeadingSection.vue';
import ProjectPageCard from 'src/components/ProjectPageCard.vue';
import InfoCard from 'src/components/InfoCard.vue';
import BackButton from 'src/components/buttons/ButtonBack.vue';

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
        <template #description>
          <p>
            Settling for the minimal viable product, Ptperfect will be invite
            only until client onboarding, appointment scheduling and integrated
            video chat are implemented.
          </p>

          <p>
            Appointment Scheduling has been implemented, however due to a
            dependency being outdated, it has been benched for a time.
          </p>
        </template>

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
        Aside from having to migrate from Laravel 7 up to Laravel 10, a lot of
        the projects dependencies had become abandoned.
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

      <InfoCard>
        Updating dependencies, finding alternatives and implementing my own
        solutions, it took quite some time. A valuable lesson in dependency
        management.
      </InfoCard>

      <!-- Movements -->
      <ProjectPageCard>
        <template #description>
          <p>
            The ways in which we are able to move, when broken down into their
            simplest forms, are called Movement Patterns.
          </p>
          <p>
            It is quite the complex subject but here is a tldr, some problems
            can be corrected by performing the right movement patterns in the
            right area of the body.
          </p>
          <p>
            In relation to the rest of the application, Movement Patterns help
            the trainer categorize exercises, making it easier and faster to put
            together a regimen.
          </p>
        </template>

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
        <template #description>
          Each exercise may need some Equipment, clients will be warned in
          advance of upcoming equipment requirements so that they have enough
          time to acquire them.
        </template>

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
        <template #description
          >Each Equipment has URLs attached to them, assisting the clients to
          identify what the item is and possible online vendors.</template
        >

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

      <InfoCard>
        A <strong>Report broken link</strong> button is a planned feature.
      </InfoCard>

      <!-- Equipment Edit -->
      <ProjectPageCard>
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
        <template #description>
          <p>At the heart of the project are the exercises or Videos.</p>
          <p>
            This is from the trainers point of view. Clients will view video's
            through their current fortnights routines.
          </p>
        </template>

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

      <InfoCard>
        These fake images are generated when from a list of youtube video
        thumbnails, they are of course, not the final product.
      </InfoCard>

      <!-- Videos Show -->
      <ProjectPageCard>
        <template #description>
          <p>
            The content of each video will have detailed instructions on how to
            perform each exercise, for example, which muscles should be engaged.
          </p>
          <p>
            A client will have the ability to attach questions to an exercise
            and to flag a Video as too easy or too hard. Their trainer will be
            able to respond to any questions and also regress or progress
            exercises to change the difficulty level.
          </p>
        </template>

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
            Blueprints simulate a Client without any of the events or
            notifications that would fire by directly editing a Client's
            Regimen. This red
          </p>
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
          >Still fixing the broken UI after migrating 3 version of
          Laravel</template
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
          <p>
            When editing a routine, a trainer has the ability to reorder, swap
            out videos, add and remove videos, override the default sets and
            reps, add additional instructions. Ontop of this they have the
            ability to change ownership and add instructions to the routine
            itself.
          </p>
          <p>
            While it is only editing a single resource, this page is overly
            complicated and will need to be split up.
          </p>
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

      <InfoCard>
        The backend was built using <strong>test driven development</strong>,
        however the Vue 2 frontend was not. I am planning to implement tests
        around the frontend as I migrate to Vue 3 using Vitest.
      </InfoCard>

      <BackButton label="Index Page"></BackButton>
    </div>
  </q-page>
</template>

<style lang="scss" scoped></style>
