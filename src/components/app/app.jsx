import React, { Component } from 'react';
import Header from '../header';
import RandomItem from '../random-item';
import { PersonCard } from '../hoc-components';
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
          <PersonCard />
        </SwapiServiceProvider>
      </div>
    )
  }
}
