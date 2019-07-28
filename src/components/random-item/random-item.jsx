import React, { Component } from 'react';
import './random-item.css';

export default class RandomItem extends Component {
  render() {
    return (
      <div className="random-item jumbotron rounded">
        <img
          className="random-item__item-image"
          src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
          alt="Planet name"
        />
        <div>
          <h2>Planet Name</h2>
          <ul className="random-item__description list-group-flush">
            <li className="random-item__description">
              <span className="term">Population</span>
              <span>123124</span>
            </li>
            <li className="random-item__description">
              <span className="term">Rotation Period</span>
              <span>43</span>
            </li>
            <li className="random-item__description">
              <span className="random-item__description-term-text">Diameter</span>
              <span>100</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
