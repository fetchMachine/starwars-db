import React, { Component } from 'react';
import './person-details.css';

export default class PersonDetails extends Component {
  render() {
    return (
      <div className="person-details card">
        <img
          className="person-details__image"
          src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
          alt="person"
        />
        <div className="card-body">
          <h2>R2-D2</h2>
          <ul className="list-group list-group-flush person-details__description">
            <li className="person-details__description-item">
              <span className="person-details__description-term-text">Gender:</span>
              <span>male</span>
            </li>
            <li className="person-details__description-item">
              <span className="person-details__description-term-text">Birth Year:</span>
              <span>43</span>
            </li>
            <li className="person-details__description-item">
              <span className="person-details__description-term-text">Eye Color:</span>
              <span>red</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
