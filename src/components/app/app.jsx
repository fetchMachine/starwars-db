import React, { Component } from 'react';
import Header from '../header';
import RandomItem from '../random-item';
import ItemCard from '../item-card';
import './app.css';

export default class App extends Component {

  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <RandomItem />
        <ItemCard />
      </div>
    )
  }
}
