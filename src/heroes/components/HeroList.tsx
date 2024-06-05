import { useMemo } from 'react';
import { getHeroByPublisher } from '../helpers';
import { HeroListBody } from '../interfaces/index';

export const HeroList = ({publisher}: HeroListBody) => {
    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

    return (
      <>  
          <ul>
            {heroes.map(hero => <li key={hero.id}>{hero.superhero}</li>)}
          </ul>
          
      </>
    )
  }
  