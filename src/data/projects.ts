import { ProjectGroup } from 'src/types/project';
import technologies from './technologies';

const projects: ProjectGroup[] = [
  {
    title: 'Current Projects',
    projects: [
      {
        name: 'Baby Daily',
        description: 'Baby Daily App to record poops, feeds, medicine intake',
        technologies: [
          technologies.vue3,
          technologies.sass,
          technologies.quasar,
          technologies.typescript,
          technologies.vitest,
        ],
      },
    ],
  },

  {
    title: 'Poker League Management',
    projects: [
      {
        name: 'Game Clock',
        description:
          'This application lets the players see the blind and chip values. It also allows the Tournament Director to manipulate the timer. This is for offline use and is bundled into the Poker Management Thick client application.',
        technologies: [technologies.vue2, technologies.scss],
      },

      {
        name: 'Thick client',
        description:
          'Part of a Poker League management application. This Java application was built with an Offline First approach. Not all venues that host Poker Tournaments have internet access, this application allows for synchronisation between the client and server and allows tournament directors to take control over any resulting conflicts. This application also has the administration UI built into it for the authorised users to make changes to their League',
        technologies: [technologies.java, technologies.sqlite],
      },

      {
        name: 'API',
        description:
          'A Codeigniter API that serves both the front end Vue2 website and the Offline First Java thick client.',
        technologies: [
          technologies.php,
          technologies.mysql,
          technologies.codeigniter,
        ],
      },

      {
        name: 'SPA',
        description:
          'The public facing SPA Website that displays the tournament results, tournament leaderboards, venues, weekly tournaments and player statistics.',
        technologies: [technologies.vue2, technologies.scss],
        external_url: 'https://eastcoastpoker.com.au',
      },
    ],
  },

  {
    title: 'Other Projects',
    projects: [
      {
        name: 'This Portfolio',
        description:
          'This portfolio was over engineered to allow me to continue playing with TypeScript and Vitest',
        technologies: [
          technologies.vue3,
          technologies.sass,
          technologies.quasar,
          technologies.typescript,
          technologies.vitest,
        ],
      },
    ],
  },
];

export default projects;
