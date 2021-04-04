/* eslint-disable no-console */
import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { MainNavigation } from './components/MainNavigation';
import { Characters } from './components/Characters';
import { Episodes } from './components/Episodes';
import { Locations } from './components/Locations';
import { Watch } from './components/Watch';
import { HomePage } from './components/HomePage';
import './App.scss';

function App() {
  console.log('hi');
  return (
    <div className="App">
      <MainNavigation />
      <Switch>
        <HomePage />
        <Characters />
        <Episodes />
        <Locations />
        <Watch />
        <Redirect to={HomePage.link({ list: 'home' })} />
      </Switch>
    </div>
  );
}

export default App;
