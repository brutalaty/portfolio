import { ProjectGroup, Project } from 'src/types/project';
import { technologies } from './technologies';

export const PTPerfect: Project = {
  name: 'PTPerfect',
  description: 'A website for personal trainers to review clients mobility and provide them with tailored workout routines.',
  technologies: [
    technologies.vue2,
    technologies.sass, 
    technologies.laravel,
    technologies.phpunit,
  ],
  route_name: 'ptperfect'
}

export const babyDailyFront: Project = {
  name: 'Baby Daily SPA',
  description: 'A pet project to record and organise a babies feeds, poops and medicine intake.',
  technologies: [
    technologies.vue3,
    technologies.sass,
    technologies.quasar,
    technologies.typescript,
    technologies.vitest,
  ],
  repository: 'https://github.com/brutalaty/baby-daily-front',
};

export const babyDailyBack: Project = {
  name: 'Baby Daily API',
  description: 'A pet project to record and organise a babies stdin, stdout and stderr.',
  
  technologies: [technologies.laravel, technologies.phpunit],
  repository: 'https://github.com/brutalaty/baby-daily-back',
};

export const pokerGameClock: Project = {
  name: 'Poker Game Clock',
  description:
    'This application lets the players see the blind and chip values. It also allows the Tournament Director to manipulate the timer. This is for offline use and is bundled into the Poker Thick Client application.',
  technologies: [technologies.vue2, technologies.scss],
  route_name: 'poker-game-clock',
  repository: 'https://github.com/brutalaty/poker-game-clock',
};

export const pokerThickClient: Project = {
  name: 'Poker Thick Client',
  description:
    'This is an Offline First desktop application. It allows tournament directors to add new player and record tournament results. It also houses an online only area for administration.',
  technologies: [technologies.java, technologies.hsqldb],
  route_name: 'poker-thick-client',
};

export const pokerSPA: Project = {
  name: 'Poker SPA',
  description:
    'The public facing SPA Website that is designed for the players to be able to view tournament results, leaderboards, weekly tournament schedules, upcoming major events and some player statistics',
  technologies: [technologies.vue2, technologies.scss],
  external_url: 'https://eastcoastpoker.com.au',
};

export const pokerAPI: Project = {
  name: 'Poker API',
  description:
    'A Codeigniter API that serves both the front end Vue2 website and the Offline First Java thick client.',
  technologies: [
    technologies.php,
    technologies.mysql,
    technologies.codeigniter,
  ],
};

export const portfolio: Project = {
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
};

export const projects: ProjectGroup[] = [
  {
    title: 'Current Projects',
    projects: [PTPerfect, babyDailyFront, babyDailyBack],
  },

  {
    title: 'Poker League Management',
    projects: [pokerGameClock, pokerThickClient, pokerSPA, pokerAPI],
  },

  {
    title: 'Other Projects',
    projects: [portfolio],
  },

  // {
  //   title: 'Other Projects',
  //   projects: [portfolio],
  // },
];

export default projects;
