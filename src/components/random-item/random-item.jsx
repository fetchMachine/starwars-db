import React, { Component } from 'react';
import Spinner from '../spinner';
import SwapiService from '../../services/swapi-service';
import './random-item.css';


const ItemView = ({ planet }) => {
  const { imgUrl, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <img
        className="random-item__item-image"
        src={imgUrl}
        alt="Planet name"
      />
      <div>
        <h2>{name}</h2>
        <ul className="random-item__description list-group-flush">
          <li className="random-item__description">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="random-item__description">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="random-item__description">
            <span className="random-item__description-term-text">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default class RandomItem extends Component {

  constructor() {
    super();
    this.setRandomPlanet();
  }

  state = {
    planet: {},
    loading: true,
  };

  swapiService = new SwapiService();

  onPlanetLoad = (planet) => {
    this.setState({ planet: { ...planet }, loading: false })
  };

  setRandomPlanet = () => {
    this.swapiService.getRandomPlanet()
      .then(this.onPlanetLoad);
  }

  render() {
    const { loading, planet } = this.state;

    return (
      <div className="random-item jumbotron rounded">
        {loading ? <Spinner /> : <ItemView planet={planet} />}
      </div>
    );
  }
}
