/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { Characters } from '../Characters';
import { Episodes } from '../Episodes';
import { Locations } from '../Locations';
import { Watch } from '../Watch';
import './MainNavigation.scss';

export const MainNavigation = () => (
  <Menu secondary inverted size="large">
    <Menu.Item link>
      <Link to={Characters.link({ list: 'characters' })}>
        Characters
      </Link>
    </Menu.Item>
    <Menu.Item link>
      <Link to={Episodes.link({ list: 'episodes' })}>
        Episodes
      </Link>
    </Menu.Item>
    <Menu.Item link>
      <Link to={Locations.link({ list: 'locations' })}>
        Locations
      </Link>
    </Menu.Item>
    <Menu.Item link>
      <Link to={Watch.link({ list: 'watch' })}>
        My watch list
      </Link>
    </Menu.Item>
  </Menu>
);
