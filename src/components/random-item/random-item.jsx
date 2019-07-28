import React, { Component } from 'react';
import Spinner from '../spinner';
import SwapiService from '../../services/swapi-service';
import ErrorIndocator from '../error-indicator';
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
            <span className="random-item__description-term-text">Population</span>
            <span>{population}</span>
          </li>
          <li className="random-item__description">
            <span className="random-item__description-term-text">Rotation Period</span>
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

  state = {
    planet: {},
    isLoading: true,
    isError: false,
  };

  swapiService = new SwapiService();

  onPlanetLoad = (planet) => {
    this.setState({
      planet: { ...planet },
      isLoading: false,
      isError: false,
   });
  };

  onError = () => {
    this.setState({
      isError: true,
      isLoading: false,
    });
  }

  setRandomPlanet = () => {
    this.swapiService.getRandomPlanet()
      .then(this.onPlanetLoad)
      .catch(this.onError);
  }

  componentDidMount() {
    this.setRandomPlanet();
    this.timerID = setInterval(this.setRandomPlanet, 5000);
  }

  render() {
    const { isLoading, planet, isError } = this.state;
    const error = isError ? <ErrorIndocator /> : null;
    const spinner = isLoading ? <Spinner /> : null;
    const itemView = !isLoading && !isError ? <ItemView planet={planet} /> : null;

    return (
      <div className="random-item jumbotron rounded">
        {error}
        {spinner}
        {itemView}
      </div>
    );
  }
}
