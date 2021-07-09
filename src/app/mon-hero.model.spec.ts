import { MonHero } from './mon-hero.model';

describe('MonHero', () => {
  it('should create an instance', () => {
    expect(new MonHero('superman', 'clark kent', false)).toBeTruthy();
  });
});
