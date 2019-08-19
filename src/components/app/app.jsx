import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from '../header';
import RandomItem from '../random-item';
import {
  PersonCard,
  StarshipCard,
  PlanetCard,
} from '../hoc-components';
import { SwapiServiceProvider } from '../ctx-swapi-service';
import SwapiService from '../../services/swapi-service';
import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <Switch>
            <div className="app-wrapper">
              <Header />
              <RandomItem />
              <Route path="/" exact render={() => (<span>Welcome to StarWars Data Base...</span>)} />
              <Route path="/peoples/" component={PersonCard} />
              <Route path="/planets/" component={PlanetCard} />
              <Route path="/starships/" component={StarshipCard} />
              <Redirect to="/" />
            </div>
          </Switch>
        </Router>
      </SwapiServiceProvider>
    )
  }
}
