import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-hoc';
import { Table } from 'semantic-ui-react';
import { getLocations } from '../../api/api';
import '../container.scss';

const LocationsRoute = Route({
  list: Route.params.enum('locations'),
}, ({ list }) => `/${list}`);

export const Locations = LocationsRoute(() => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations()
      .then((resolve) => setLocations(resolve.results));
  }, []);

  return (
    <div className="container">
      <Table celled inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell>Dimension</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {locations.map((location) => (
            <Table.Row key={location.id}>
              <Table.Cell>{location.name}</Table.Cell>
              <Table.Cell>{location.type}</Table.Cell>
              <Table.Cell>{location.dimension}</Table.Cell>
            </Table.Row>
          ))}

        </Table.Body>
      </Table>
    </div>
  );
});
