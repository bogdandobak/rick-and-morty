import React, { useState } from 'react';
import { Route } from 'react-router-hoc';

const CharactersRoute = Route({
  list: Route.params.enum('characters'),
}, ({ list }) => `/${list}`);

export const Characters = CharactersRoute(() => {
  const [state] = useState(1);

  return (
    <h1>
      {`Characters: ${state}`}
    </h1>
  );
});
