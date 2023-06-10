import Technology from 'src/types/technology';

export type TechnologiesDeclared =
  | 'typescript'
  | 'vitest'
  | 'vue2'
  | 'vue3'
  | 'quasar'
  | 'java'
  | 'php'
  | 'codeigniter'
  | 'laravel'
  | 'phpunit'
  | 'scss'
  | 'sass'
  | 'sqlite'
  | 'mysql';

type Technologies = Record<TechnologiesDeclared, Technology>;

export const technologies: Technologies = {
  typescript: { name: 'TS', color: '#3178c6' },
  vitest: { name: 'Vitest', color: '#6da13f' },
  vue2: { name: 'Vue 2', color: '#00aa00' },
  vue3: { name: 'Vue 3', color: '#00aa00' },
  quasar: { name: 'QUASAR', color: '#1976d2' },
  java: { name: 'Java', color: '#3a75b0' },
  php: { name: 'PHP', color: '#7A86B8' },
  codeigniter: {
    name: 'CodeIgniter',
    color: '#DD4814',
  },
  laravel: {
    name: 'Laravel',
    color: '#F9322C',
  },
  phpunit: {
    name: 'PHPUnit',
    color: '#3c9cd7',
  },
  scss: { name: 'SCSS', color: '#bf4080' },
  sass: { name: 'Sass', color: '#bf4080' },
  sqlite: { name: 'SQLite', color: '#7cbeec' },
  mysql: { name: 'MySQL', color: '#3E6E93' },
};

export default technologies;
