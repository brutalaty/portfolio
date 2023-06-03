import { describe, expect, it } from 'vitest';

import technologies, { TechnologiesDeclared } from 'src/data/technologies';

describe('technologies data', () => {
  let key: TechnologiesDeclared;

  describe('name', () => {
    it.only('is never an empty string', () => {
      for (key in technologies) {
        expect(technologies[key].name).toBeTruthy();
      }
    });
  });

  describe('color', () => {
    it('is never an empty string', () => {
      for (key in technologies) {
        expect(technologies[key].backgroundColor).toBeTruthy();
        expect(technologies[key].textColor).toBeTruthy();
      }
    });

    it('is must be a hex value', () => {
      for (key in technologies) {
        expect(technologies[key].backgroundColor[0]).toEqual('#');
        expect(technologies[key].backgroundColor).toHaveLength(7);
        expect(technologies[key].textColor[0]).toEqual('#');
        expect(technologies[key].textColor).toHaveLength(7);
      }
    });
  });
});
