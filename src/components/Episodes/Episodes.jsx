import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-hoc';
import { Table } from 'semantic-ui-react';
import { getEpisodes } from '../../api/api';
import '../container.scss';

const EpisodesRoute = Route({
  list: Route.params.enum('episodes'),
}, ({ list }) => `/${list}`);

export const Episodes = EpisodesRoute(() => {
  /* const [pages, setPages] = useState({}); */
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    /* getEpisodes()
      .then((resolve) => setPages(resolve.info)); */
    getEpisodes()
      .then((resolve) => setEpisodes(resolve.results));
  }, []);

  return (
    <div className="container">
      <Table celled inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Air date</Table.HeaderCell>
            <Table.HeaderCell>Episode</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {episodes.map((episode) => (
            <Table.Row key={episode.id}>
              <Table.Cell>{episode.name}</Table.Cell>
              <Table.Cell>{episode.air_date}</Table.Cell>
              <Table.Cell>{episode.episode}</Table.Cell>
            </Table.Row>
          ))}

        </Table.Body>
      </Table>
    </div>
  );
});
