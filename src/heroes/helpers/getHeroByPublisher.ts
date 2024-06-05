import { heroes } from "../data/heroes";
import { Hero, Publisher } from "../interfaces";

export const getHeroByPublisher = (publisher: keyof typeof Publisher): Hero[] => {
    const validPublisher: Publisher[] = [Publisher.DCComics, Publisher.MarvelComics];

    const enumPublisher: Publisher = Publisher[publisher];

    if (!validPublisher.includes(enumPublisher)) {
        throw new Error(`${publisher} is not a valid publisher`)
    }

    return heroes.filter(hero => hero.publisher === enumPublisher);
} 