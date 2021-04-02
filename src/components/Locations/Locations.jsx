import React, { useState } from 'react';
import { Route } from 'react-router-hoc';

const LocationsRoute = Route({
  list: Route.params.enum('locations'),
}, ({ list }) => `/${list}`);

export const Locations = LocationsRoute(() => {
  const [state] = useState(3);

  return (
    <h1>
      {`Locations: ${state}`}
    </h1>
  );
});
