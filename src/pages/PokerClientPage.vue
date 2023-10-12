<script setup lang="ts">
import ProjectPageHeadingSection from 'src/components/ProjectPageHeadingSection.vue';
import ProjectPageCard from 'src/components/ProjectPageCard.vue';
import InfoCard from 'src/components/InfoCard.vue';

import { pokerThickClient as project } from 'src/data/projects';
</script>

<template>
  <q-page>
    <ProjectPageHeadingSection :project="project" />

    <div class="flex flex-center">
      <ProjectPageCard>
        <template #description>
          <p>
            Despite what people think this applications purpose is at first
            glance, it is not a game nor is it an online gambling platform. It's
            main function is to record results of the tournaments ran by Poker
            Leagues, allowing leaderboards and the players to view their own
            performance statistics.
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

      <InfoCard>
        Built with Java, this desktop app can run on Linux, Windows or MacOS.
      </InfoCard>

      <ProjectPageCard>
        <template #description>
          <p>Here we see my basic vector skills being pushed to their limit.</p>

          <p>
            Most venues they run the tournaments at have very poor internet
            connection or worse, none at all. To keep their offline data as up
            to date as possible, tournament directors should sync before and
            after running a tournament.
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

      <InfoCard>
        The Poker Management API houses a
        <strong>Database Per Client</strong> Architecture.
      </InfoCard>

      <ProjectPageCard>
        <template #description>
          <p class="q-mb-xl">
            The settings screen allows the user to set their Leagues name, User
            name and even change the url that the client connects to. Changing
            anything other then the User Name alerts the user that all or some
            data will be wiped and asks for confirmation.
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

      <InfoCard>
        The server database has a table named
        <code>change_log</code>
        that contains all of the changes made within the last few weeks, these
        changes are gathered via MySQL Triggers.
      </InfoCard>

      <ProjectPageCard>
        <template #description>
          <p>
            The client app will download all changes since the last
            synchronisation. If the client is below the servers minimum stored
            version(not displayed), they will be forced to wipe local data and
            download each model iteratively rather then by the
            <code>change_log</code>.
          </p>

          <p>
            If there are any conflicts with the unsynchronised data on the
            client and the data coming from the server, the user is asked how to
            handle the conflict.
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

      <InfoCard>
        Using the <strong>Strategy</strong> and <strong>State</strong> design
        patterns, the Synchronisation process runs through an async loop. One
        strategy for example, is the Download Strategy, which will request
        updates in batches and apply them to the local database until it is
        either up to date or runs into a conflict.
      </InfoCard>

      <ProjectPageCard>
        <template #description>
          <p>
            To create a new or edit an <dfn>offline result</dfn>, a result yet
            to be synchronised to the server, you select
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

      <InfoCard>
        All of the local and server database functions are accessed through
        their own gateways,
        <code>LocalGateway</code> and <code>ServerGateway</code>.
      </InfoCard>

      <ProjectPageCard>
        <template #description>
          <p>
            A <dfn>Weekly Game</dfn> runs once a week, every week, on the
            specified day of the week. When creating a weekly games result, the
            calendar is locks the other 6 days and so, they cannot be selected.
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
      <InfoCard>
        These
        <em>Result Creation</em> screens were needed for multiple usecases. They
        had to be able to save to the local database when offline and directly
        to the server when in the admin area.
      </InfoCard>

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
            of the Game Clock on the
            <router-link to="poker-game-clock"
              ><strong>Game Clock</strong> Page.</router-link
            >
          </p>
          <p>
            You register players by finding them in the list, type-hinting in
            the searchbox or by scanning their member card.
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

      <InfoCard>
        The necessary functions of <code>LocalGateway</code> and
        <code>ServerGateway</code>
        are injected into these controllers via the
        <strong>adapter </strong>
        <code> TournamentGateway</code>. removing the need to create and manage
        multiple of each controller.
      </InfoCard>

      <ProjectPageCard id="create-results-4">
        <template #description>
          <p>
            Players who enter the tournament are awarded participation points,
            those who place higher gain more points. The point structures are
            setup by the administrators in the administration area. Tournaments
            that are known to attract a larger player pool can be adjusted to
            award more points, seeing that it is much more difficult to place in
            them.
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
          <p>There are three roles for staff:</p>

          <ul>
            <li><strong>Owner </strong> has all permissions</li>
            <li>
              <strong>Technician</strong> has all permissions but cannot edit
              the Owner
            </li>
            <li>
              <strong>Tournament Director</strong> can only make changes to
              players and results
            </li>
          </ul>
          <p></p>
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
          Each section in the administration area have a data table with
          relevant information and buttons for CRUD operations.
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
        <template #description
          ><p>
            All forms have validation that change the color of the input and the
            related label.
          </p>
          <p>
            If you actually read through all of this, well done! I think you
            deserve something for the effort. Here is a free link to take you
            back the the<q-btn to="index" flat dense class="" color="primary"
              >Index Page</q-btn
            >
          </p>
        </template>

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
