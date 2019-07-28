import React, { Component } from 'react';
import Header from '../header';
import RandomItem from '../random-item';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import './app.css';

export default class App extends Component {

  onItemSwap = (item) => {
    window.console.dir(item);
  }

  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <RandomItem />
        <main className="row mb2">
          <div className="col-md-4">
            <ItemList onItemClick={this.onItemSwap} />
          </div>
          <div className="col-md-8">
            <div>
              <PersonDetails />
            </div>
          </div>
        </main>
      </div>
    )
  }
}
