import { Hero } from "../interfaces";

export const getUrlByHero = (hero: Hero): string => {
    return `/assets/heroes/${hero.id}.jpg`;
} 