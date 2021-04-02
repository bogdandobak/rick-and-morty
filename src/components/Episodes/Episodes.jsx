import React, { useState } from 'react';
import { Route } from 'react-router-hoc';

const EpisodesRoute = Route({
  list: Route.params.enum('episodes'),
}, ({ list }) => `/${list}`);

export const Episodes = EpisodesRoute(() => {
  const [state] = useState(2);

  return (
    <h1>
      {`Episodes: ${state}`}
    </h1>
  );
});
