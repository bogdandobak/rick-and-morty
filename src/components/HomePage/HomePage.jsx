import React from 'react';
import { Route } from 'react-router-hoc';
import './HomePage.scss';

const HomePageRoute = Route({
  list: Route.params.enum('home'),
}, ({ list }) => `/${list}`);

export const HomePage = HomePageRoute(() => (
  <div className="home">
    <h1>
      Hello
    </h1>
  </div>
));
