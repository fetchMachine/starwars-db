import React, { Component } from 'react';
import Header from '../header';
import RandomItem from '../random-item';
import {
  PersonCard,
  StarshipCard,
  PlanetCard,
} from '../hoc-components';
import { SwapiServiceProvider } from '../ctx-swapi-service';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <RandomItem />
        <SwapiServiceProvider value={this.swapiService}>
          <h2>Persons</h2>
          <PersonCard />
          <h2>Planets</h2>
          <PlanetCard />
          <h2>Starhips</h2>
          <StarshipCard />
        </SwapiServiceProvider>
      </div>
    )
  }
}
