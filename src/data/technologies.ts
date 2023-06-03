import Technology from 'src/types/technology';

type TechnologiesDeclared =
  | 'typescript'
  | 'vitest'
  | 'vue2'
  | 'vue3'
  | 'quasar'
  | 'java'
  | 'php'
  | 'codeigniter'
  | 'laravel'
  | 'scss'
  | 'sass'
  | 'sqlite'
  | 'mysql';

type Technologies = Record<TechnologiesDeclared, Technology>;

const technologies: Technologies = {
  typescript: { name: 'TS', backgroundColor: '#3178c6', textColor: '#ffffff' },
  vitest: { name: 'Vitest', backgroundColor: '#1e1e20', textColor: '#6da13f' },
  vue2: { name: 'Vue 2', backgroundColor: '#00aa00', textColor: '#ffffff' },
  vue3: { name: 'Vue 3', backgroundColor: '#00aa00', textColor: '#ffffff' },
  quasar: { name: 'QUASAR', backgroundColor: '#1976d2', textColor: '#ffffff' },
  java: { name: 'Java', backgroundColor: '#3a75b0', textColor: '#ffffff' },
  php: { name: 'PHP', backgroundColor: '#7A86B8', textColor: '#000000' },
  codeigniter: {
    name: 'CodeIgniter',
    backgroundColor: '#DD4814',
    textColor: '#ffffff',
  },
  laravel: {
    name: 'Laravel',
    backgroundColor: '#ffffff',
    textColor: '#F9322C',
  },
  scss: { name: 'SCSS', backgroundColor: '#bf4080', textColor: '#ffffff' },
  sass: { name: 'Sass', backgroundColor: '#bf4080', textColor: '#ffffff' },
  sqlite: { name: 'SQLite', backgroundColor: '#044a64', textColor: '#ffffff' },
  mysql: { name: 'MySQL', backgroundColor: '#3E6E93', textColor: '#ffffff' },
};

export default technologies;
export type { TechnologiesDeclared };
