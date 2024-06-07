import { useMemo } from 'react';
import { getHeroByPublisher } from '../helpers';
import { HeroListBody } from '../interfaces/index';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}: HeroListBody) => {
    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

    return (
      <div className='row row-cols-1 row-cols-md-3 g-3'>  
            {heroes.map(hero => <HeroCard hero={hero}/>)}
      </div>
    )
  }
  