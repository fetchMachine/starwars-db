import React, { Component } from 'react';
import Header from '../header';
import RandomItem from '../random-item';
import PersonPage from '../person-page';
import './app.css';

export default class App extends Component {

  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <RandomItem />
        <main className="row mb2">
          <PersonPage />
        </main>
      </div>
    )
  }
}
