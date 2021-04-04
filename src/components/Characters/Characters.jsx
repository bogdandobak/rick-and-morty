import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-hoc';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { getCharacters } from '../../api/api';
import './Characters.scss';

const CharactersRoute = Route({
  list: Route.params.enum('characters'),
}, ({ list }) => `/${list}`);

export const Characters = CharactersRoute(() => {
  const [characters, setCharcters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((resolve) => setCharcters(resolve.results));
  }, []);

  return (
    <div>
      <div className="card">
        {characters.map((person) => (
          <Flippy
            flipOnHover // default false
            flipDirection="horizontal" // horizontal or vertical
            style={{ width: '200px', height: '200px' }}
          >
            <FrontSide
              style={{
                backgroundImage: `url(${person.image})`,
                backgroundSize: 'contain',
                borderRadius: '20px',
              }}
            >
              <p className="card__title">
                {person.name}
              </p>
            </FrontSide>
            <BackSide
              style={{
                backgroundImage: `url(${person.image})`,
                backgroundSize: 'contain',
                borderRadius: '20px',
              }}
            >
              <p className="card__info">
                {`Status: ${person.status}, character is: ${person.species}`}
              </p>
            </BackSide>
          </Flippy>
        ))}
      </div>
    </div>
  );
});
