import React from 'react';
import Header from '../header';
import RandomItem from '../random-item';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import './app.css';

const App = () => (
  <div className="app-wrapper">
    <Header />
    <RandomItem />
    <main className="row mb2">
      <div className="col-md-4">
        <ItemList />
      </div>
      <div className="col-md-8">
        <div>
          <PersonDetails />
        </div>
      </div>
    </main>
  </div>
);

export default App;
