import React, { useState } from 'react';
import { Route } from 'react-router-hoc';

const WatchListRoute = Route({
  list: Route.params.enum('watchList'),
}, ({ list }) => `/${list}`);

export const WatchList = WatchListRoute(() => {
  const [state] = useState(4);

  return (
    <h1>
      {`WatchList: ${state}`}
    </h1>
  );
});
