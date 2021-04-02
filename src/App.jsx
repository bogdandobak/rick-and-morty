/* eslint-disable no-console */
import React from 'react';
import { Switch } from 'react-router-dom';
import { getCharacters } from './api/api';
import { MainNavigation } from './components/MainNavigation';
import { Characters } from './components/Characters';
import { Episodes } from './components/Episodes';
import { Locations } from './components/Locations';
import { WatchList } from './components/WatchList';
import './App.scss';

function App() {
  console.log(getCharacters().info);
  return (
    <div className="App">
      <MainNavigation />
      <Switch>
        <Characters />
        <Episodes />
        <Locations />
        <WatchList />
      </Switch>
    </div>
  );
}

export default App;
