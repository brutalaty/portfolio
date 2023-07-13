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
        <template #description>
          <p>
            During this applications development, I was studying SOLID
            principles and Design Patterns. I enjoyed implementing in practice
            what I had been learning.
          </p>
        </template>

        <template #figure="{ sizes }">
          <figcaption>Splash Loading Screen</figcaption>
          <img
            :sizes="sizes"
            srcset="
              images/poker-thick-client/load-screen/load-splash-screen_400.png 400w,
              images/poker-thick-client/load-screen/load-splash-screen_485.png 485w,
              images/poker-thick-client/load-screen/load-splash-screen_531.png 531w
            "
            src="images/poker-thick-client/load-screen/load-splash-screen_531.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <ProjectPageCard>
        <template #description>
          <p>
            This Java desktop app was built without any framework or ui library.
            It uses
            <a href="https://miglayout.com/" target="_blank">MigLayout</a> and
            plain swing/awt.
          </p>

          <p>
            Almost all of this applications components have had their
            depenencies inverted. Main.java is the only dirty class, as it
            creates and injects all of the dependencies into the factories,
            gateways, etc.
          </p>
        </template>
        <template #figure="{ sizes }">
          <figcaption>Main Menu</figcaption>
          <img
            :sizes="sizes"
            srcset="
              images/poker-thick-client/main-menu/main-menu_400.png 400w,
              images/poker-thick-client/main-menu/main-menu_738.png 738w
            "
            src="images/poker-thick-client/main-menu/main-menu_738.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <ProjectPageCard>
        <template #description>
          <p class="q-mb-xl">
            The settings screen allows the user to set their Leagues name, User
            name and even change the url that the client connects to. Changing
            anything other then the User Name alerts the user that all or some
            data will be wiped and asks for confirmation.
          </p>
          <p>
            The Poker Management API houses a
            <strong>Database Per Client</strong> Architecture.
          </p>
        </template>
        <template #figure>
          <figcaption>Settings</figcaption>
          <img
            src="images/poker-thick-client/settings-screen/settings-screen.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <ProjectPageCard>
        <template #description>
          <p>
            The server database has a table named
            <code>change_log</code>
            that contains all of the changes made within the last few weeks,
            these changes are gathered via MySQL Triggers.
          </p>
          <p class="q-my-lg">
            Using the <strong>Strategy</strong> and
            <strong>State</strong> design patterns, the Synchronisation process
            runs through an async loop. During the download strategy, the sync
            process accesses the <code>change_log</code> to update the local
            database. When download completes, it moves onto the upload strategy
            to push the new offline data to the server.
          </p>
        </template>
        <template #figure="{ sizes }">
          <figcaption>Synchronisation</figcaption>
          <img
            :sizes="sizes"
            srcset="
              images/poker-thick-client/sync-screen/sync-start_400.png 400w,
              images/poker-thick-client/sync-screen/sync-start_751.png 751w
            "
            src="images/poker-thick-client/sync-screen/sync-start_751.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <ProjectPageCard>
        <template #description>
          <p>
            To create a new or edit an <dfn>offline result</dfn>, a result yet
            to be syncrhonised to the server, you select
            <em>Official Game</em> at the <em>Main Menu</em>.
          </p>
          <p>
            To save a result directly to the server or edit a result that is on
            the server, you select <em>Results</em> from the
            <em>Administration Area</em>.
          </p>
        </template>
        <template #figure>
          <figcaption>Create Results (1)</figcaption>
          <img
            src="images/poker-thick-client/results-screen/create-results-screen-1.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <ProjectPageCard>
        <template #description>
          <p>
            A <dfn>Weekly Game</dfn> runs once a week, every week, on specificed
            day of the week. When creating a weekly games result, the calendar
            is locked to it's day of the week.
          </p>
          <p>
            <dfn>Events</dfn> are larger games that have a larger prize pool and
            run for a longer duration of time, they also have a specific date
            they run on. The calendar will only have a single date available for
            selection.
          </p>
        </template>
        <template #figure>
          <figcaption>Create Results (2)</figcaption>
          <img
            src="images/poker-thick-client/results-screen/create-results-screen-2.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <ProjectPageCard>
        <template #description>
          <p>
            This screen is really the core of the application for a
            <abbr>TD</abbr> (Tournament Director)
          </p>
          <p>
            From here they can create new players, register players, enter
            finishing placements and open the game clock. You can see the
            placements list in the
            <a href="#create-results-4">next panel</a> and you can see a preview
            of the
            <router-link to="poker-game-clock"
              ><strong>Game Clock</strong> here.</router-link
            >
          </p>
          <p>
            Register players by finding them in the list or by scanning their
            member card.
          </p>
          <p>
            Players who enter the tournament are awarded participation points,
            those who place higher gain more poins. The point structures are
            setup by the administrators in the administration area. Tournaments
            that are known to attract a larger player pool can be adjusted to
            award more points, seeing that it is much more difficult to place in
            them.
          </p>
        </template>
        <template #figure="{ sizes }">
          <figcaption>Create Results (3a)</figcaption>
          <img
            :sizes="sizes"
            srcset="
              images/poker-thick-client/results-screen/create-results-screen-3_400.png 400w,
              images/poker-thick-client/results-screen/create-results-screen-3_907.png 907w
            "
            src="images/poker-thick-client/results-screen/create-results-screen-3_907.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <ProjectPageCard id="create-results-4">
        <template #description>
          <p>
            All of the local and server database functions are accessed through
            their own gateways, <code>LocalGateway</code> and
            <code>ServerGateway</code>.
          </p>
          <p>
            These <em>Result Creation</em> screens were needed for multiple
            usecases. They had to be able to save to the local database when
            offline and directly to the server when in the admin area.
          </p>
          <p>
            The necessary functions of <code>LocalGateway</code> and
            <code>ServerGateway</code>
            are injected into these controllers via the
            <strong>adapter </strong>
            <code> TournamentGateway</code>. removing the need to create and
            manage multiple of each controller.
          </p>
        </template>
        <template #figure="{ sizes }">
          <figcaption>Create Results (3b)</figcaption>
          <img
            :sizes="sizes"
            srcset="
              images/poker-thick-client/results-screen/create-results-screen-4_400.png 400w,
              images/poker-thick-client/results-screen/create-results-screen-4_901.png 901w
            "
            src="images/poker-thick-client/results-screen/create-results-screen-4_901.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <ProjectPageCard>
        <template #description>
          <p>
            There are three roles for staff,
            <strong>Tournament Directors</strong> have base permissions
            <br />
            owner can do everything
            <br />
            technician can do everything with the exception of promoting users
            or editing the own or other technicians details.
          </p>
        </template>
        <template #figure="{ sizes }">
          <figcaption>Administration</figcaption>
          <img
            :sizes="sizes"
            srcset="
              images/poker-thick-client/admin-screen/admin-screen_400.png 400w,
              images/poker-thick-client/admin-screen/admin-screen_655.png 655w
            "
            src="images/poker-thick-client/admin-screen/admin-screen_655.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <ProjectPageCard>
        <template #description>
          Handy information for each model and CRUD operations
        </template>

        <template #figure>
          <figcaption>Administration Resource</figcaption>
          <img
            src="images/poker-thick-client/admin-screen/venue-management-screen.png"
            alt=""
          />
        </template>
      </ProjectPageCard>

      <ProjectPageCard>
        <template #description> validation pipelines on modal forms </template>

        <template #figure>
          <figcaption>Administration Form</figcaption>
          <img
            src="images/poker-thick-client/admin-screen/edit-venue-screen.png"
            alt=""
          />
        </template>
      </ProjectPageCard>
    </div>
  </q-page>
</template>

<style lang="sass">
.project-inline-list
  display: flex
  flex-wrap: wrap
  padding: 0 2.5rem
  margin: 2rem 0
  justify-content: center
  &__item
    display: inline-block
    white-space: nowrap
    margin: 0 1rem
    padding: 0 .2rem
    border-bottom: inset 1px #411
    font-style: italic
</style>
