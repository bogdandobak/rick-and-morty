import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-hoc';
import { Pagination } from 'semantic-ui-react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { getCharacters } from '../../api/api';

const LocationsRoute = Route({
  list: Route.params.enum('locations'),
}, ({ list }) => `/${list}`);

export const Locations = LocationsRoute(() => {
  const [pages, setPages] = useState({});
  const [characters, setCharcters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((resolve) => setPages(resolve.info));
    getCharacters()
      .then((resolve) => setCharcters(resolve.results));
  }, []);

  return (
    <div>
      <div className="pagination">
        <Pagination
          inverted
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={pages.pages}
        />
      </div>
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
              <p>
                {`Status: ${person.status}, character is: ${person.species}`}
              </p>
            </BackSide>
          </Flippy>
        ))}
      </div>
    </div>
  );
});
